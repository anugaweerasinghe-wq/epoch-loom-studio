import { createFileRoute } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { PageTitle } from "@/components/PageTitle";
import { SITE_CONTENT } from "@/config/content";
import { ParallaxBackdrop } from "@/components/visuals/ParallaxBackdrop";
import { EXPO_OUT } from "@/lib/motion";

const STORAGE_KEY = "voidborn.chat.messages.v1";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: `${SITE_CONTENT.pages.chat} — ${SITE_CONTENT.game.title}` },
      { name: "description", content: SITE_CONTENT.chat.intro },
      { property: "og:title", content: `${SITE_CONTENT.pages.chat} — ${SITE_CONTENT.game.title}` },
      { property: "og:description", content: SITE_CONTENT.chat.intro },
    ],
  }),
  component: ChatPage,
});

function loadInitial(): UIMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function messageText(m: UIMessage) {
  return m.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("");
}

function ChatPage() {
  const c = SITE_CONTENT.chat;
  const [initial] = useState<UIMessage[]>(loadInitial);
  const [input, setInput] = useState("");
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error, setMessages } = useChat({
    id: "voidborn-chat",
    messages: initial,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  // Persist
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Focus + autoscroll
  useEffect(() => {
    taRef.current?.focus();
  }, []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const loading = status === "submitted" || status === "streaming";
  const disabled = loading;

  const submit = async () => {
    const text = input.trim();
    if (!text || disabled) return;
    setInput("");
    await sendMessage({ text });
    taRef.current?.focus();
  };

  const reset = () => {
    setMessages([]);
    if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
    taRef.current?.focus();
  };

  return (
    <>
      <ParallaxBackdrop tint="cyan" />

      <section className="relative flex items-center justify-center px-6 pt-[180px] pb-[40px]">
        <div className="relative">
          <PageTitle title={SITE_CONTENT.pages.chat} />
        </div>
      </section>

      <section className="px-6 pb-[140px]">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: EXPO_OUT }}
            className="font-body text-center text-[16px] leading-[1.9]"
            style={{ color: "var(--text-secondary)", fontWeight: 300 }}
          >
            {c.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: EXPO_OUT }}
            className="glass relative mt-14 flex h-[560px] flex-col rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 60px rgba(79,195,247,0.06)",
              borderColor: "rgba(79,195,247,0.18)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between border-b px-6 py-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-2 w-2">
                  <span
                    className="absolute inset-0 animate-ping rounded-full"
                    style={{ background: "var(--plasma-cyan)", opacity: 0.7 }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "var(--plasma-cyan)" }}
                  />
                </span>
                <div
                  className="font-mono-ui text-[10.5px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  CHANNEL · OPEN
                </div>
              </div>
              <div className="flex items-center gap-4">
                {messages.length > 0 && (
                  <button
                    onClick={reset}
                    className="font-mono-ui text-[10px] uppercase tracking-[0.25em] transition-colors hover:text-white"
                    style={{ color: "var(--text-muted)" }}
                  >
                    NEW SESSION
                  </button>
                )}
                <div
                  className="font-mono-ui text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  VOID GUIDE v1.0
                </div>
              </div>
            </div>

            {/* Transcript */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
              {messages.length === 0 && (
                <EmptyState
                  suggestions={c.suggestions}
                  onPick={async (s) => {
                    setInput("");
                    await sendMessage({ text: s });
                    taRef.current?.focus();
                  }}
                />
              )}

              <div className="flex flex-col gap-6">
                {messages.map((m) => (
                  <MessageBubble key={m.id} role={m.role} text={messageText(m)} />
                ))}
                {status === "submitted" && <ThinkingShimmer />}
                {error && (
                  <div
                    className="font-mono-ui text-[11px] uppercase tracking-[0.25em]"
                    style={{ color: "var(--danger-red)" }}
                  >
                    ◆ {error.message || "The Void channel collapsed. Try again."}
                  </div>
                )}
              </div>
            </div>

            {/* Composer */}
            <div
              className="border-t px-4 py-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="flex items-end gap-3 rounded-xl px-4 py-3 transition-all focus-within:ring-1"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <textarea
                  ref={taRef}
                  rows={1}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void submit();
                    }
                  }}
                  disabled={disabled}
                  placeholder={c.placeholder}
                  className="flex-1 resize-none bg-transparent font-body text-[15.5px] font-semibold leading-[1.6] outline-none placeholder:opacity-50 disabled:opacity-60"
                  style={{
                    color: "#eaffff",
                    maxHeight: 140,
                    caretColor: "var(--plasma-cyan)",
                    WebkitFontSmoothing: "antialiased",
                    letterSpacing: "0.01em",
                  }}
                />
                <button
                  onClick={() => void submit()}
                  disabled={disabled || !input.trim()}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-all disabled:opacity-40"
                  style={{
                    background: "var(--plasma-cyan)",
                    color: "#001018",
                  }}
                  aria-label="Send"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
              <div
                className="font-mono-ui mt-2 px-1 text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "var(--text-muted)" }}
              >
                ENTER to transmit · SHIFT+ENTER for new line
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function EmptyState({
  suggestions,
  onPick,
}: {
  suggestions: string[];
  onPick: (s: string) => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
      <Sigil />
      <div
        className="mt-6 font-display text-[22px] font-bold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        Ask the Void.
      </div>
      <p
        className="mt-3 max-w-md font-body text-[13.5px] leading-[1.85]"
        style={{ color: "var(--text-muted)", fontWeight: 300 }}
      >
        The Void Guide knows every fragment published in this archive — its classes,
        epochs, mechanics, score, and the Collective that built it.
      </p>
      <div className="mt-8 grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onPick(s)}
            className="group rounded-xl px-4 py-3 text-left transition-all hover:scale-[1.02]"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              className="font-body text-[12.5px] transition-colors group-hover:text-white"
              style={{ color: "var(--text-secondary)" }}
            >
              {s}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Sigil() {
  return (
    <motion.svg
      viewBox="0 0 60 60"
      className="h-14 w-14"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, ease: "linear", repeat: Infinity }}
    >
      <circle cx="30" cy="30" r="22" fill="none" stroke="var(--plasma-cyan)" strokeWidth="0.6" opacity="0.6" />
      <circle cx="30" cy="30" r="14" fill="none" stroke="var(--plasma-cyan)" strokeWidth="0.4" opacity="0.4" />
      <polygon points="30,8 52,30 30,52 8,30" fill="none" stroke="var(--plasma-cyan)" strokeWidth="0.8" />
      <circle cx="30" cy="30" r="3" fill="var(--plasma-cyan)" />
    </motion.svg>
  );
}

function MessageBubble({ role, text }: { role: string; text: string }) {
  const isUser = role === "user";
  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EXPO_OUT }}
        className="flex justify-end"
      >
        <div
          className="max-w-[80%] rounded-2xl px-4 py-3 font-body text-[14px] leading-[1.6]"
          style={{
            background: "var(--plasma-cyan)",
            color: "#001018",
            fontWeight: 400,
          }}
        >
          {text}
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: EXPO_OUT }}
      className="flex flex-col gap-2"
    >
      <div
        className="font-mono-ui text-[9.5px] uppercase tracking-[0.3em]"
        style={{ color: "var(--plasma-cyan)", opacity: 0.75 }}
      >
        ◆ VOID GUIDE
      </div>
      <div
        className="prose-chat font-body text-[14.5px] leading-[1.8]"
        style={{ color: "var(--text-primary)", fontWeight: 300 }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
            strong: ({ children }) => (
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>{children}</strong>
            ),
            em: ({ children }) => (
              <em style={{ color: "var(--plasma-cyan)", fontStyle: "normal", opacity: 0.9 }}>
                {children}
              </em>
            ),
            ul: ({ children }) => <ul className="mb-3 ml-4 list-disc space-y-1">{children}</ul>,
            ol: ({ children }) => <ol className="mb-3 ml-4 list-decimal space-y-1">{children}</ol>,
            code: ({ children }) => (
              <code
                className="font-mono-ui rounded px-1.5 py-0.5 text-[12px]"
                style={{ background: "rgba(79,195,247,0.1)", color: "var(--plasma-cyan)" }}
              >
                {children}
              </code>
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

function ThinkingShimmer() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-3"
      >
        <div
          className="font-mono-ui text-[9.5px] uppercase tracking-[0.3em]"
          style={{ color: "var(--plasma-cyan)", opacity: 0.75 }}
        >
          ◆ VOID GUIDE
        </div>
        <motion.span
          className="font-body text-[13px]"
          style={{ color: "var(--text-muted)" }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Consulting the archive…
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
