const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none noise-overlay">
      <div className="fixed inset-0 grid-pattern-strong opacity-80" />
      <div className="fixed inset-0 dot-pattern opacity-60" />
      <div className="fixed -top-[12%] left-1/2 h-[720px] w-[920px] -translate-x-1/2 rounded-full bg-primary/22 blur-[130px]" />
      <div className="fixed top-[18%] -right-[8%] h-[520px] w-[520px] rounded-full bg-[hsl(192_66%_45%/0.16)] blur-[110px]" />
      <div className="fixed top-[48%] -left-[6%] h-[420px] w-[420px] rounded-full bg-primary/16 blur-[100px]" />
      <div className="fixed bottom-[-8%] right-[8%] h-[380px] w-[380px] rounded-full bg-primary/14 blur-[90px]" />
      <div className="fixed top-[62%] left-[28%] h-[260px] w-[260px] rounded-full bg-primary/18 blur-[70px]" />
      <div className="fixed bottom-[22%] right-[32%] h-[200px] w-[200px] rounded-full bg-[hsl(192_66%_45%/0.12)] blur-[60px]" />
    </div>
  )
}

export default BackgroundEffects
