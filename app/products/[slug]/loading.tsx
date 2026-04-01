export default function Loading() {

    return (
  
      <main className="min-h-screen bg-[#FAFAF7]">
  
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-2 gap-16">
  
          <div className="aspect-square bg-gray-200 animate-pulse rounded"></div>
  
          <div className="space-y-6">
  
            <div className="h-8 bg-gray-200 animate-pulse w-64 rounded"></div>
  
            <div className="h-[1px] bg-gray-200 w-16"></div>
  
            <div className="h-4 bg-gray-200 animate-pulse w-full rounded"></div>
  
            <div className="h-4 bg-gray-200 animate-pulse w-3/4 rounded"></div>
  
            <div className="h-12 bg-gray-200 animate-pulse w-48 rounded"></div>
  
          </div>
  
        </section>
  
      </main>
  
    )
  
  }