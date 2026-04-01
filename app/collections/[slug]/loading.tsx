export default function Loading() {

    return (
  
      <main className="min-h-screen bg-[#FAFAF7] text-[#2A1A14]">
  
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
  
          <div className="h-10 w-72 bg-gray-200 animate-pulse mx-auto mb-4 rounded"></div>
  
          <div className="w-20 h-[1px] bg-gray-200 mx-auto"></div>
  
        </section>
  
        <section className="max-w-6xl mx-auto px-6 pb-24">
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  
            {[...Array(8)].map((_,i)=>(
  
              <div key={i}>
  
                <div className="aspect-square bg-gray-200 animate-pulse rounded mb-4"></div>
  
                <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>
  
                <div className="h-3 bg-gray-200 animate-pulse w-2/3 rounded"></div>
  
              </div>
  
            ))}
  
          </div>
  
        </section>
  
      </main>
  
    )
  
  }