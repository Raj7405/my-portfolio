const BackgroundEffects = () => {
  return (
    <div className="noise-overlay">
      <div className="fixed inset-0 grid-pattern opacity-50" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
    </div>
  )
}

export default BackgroundEffects