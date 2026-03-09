const experiences = [
 { period: ' October 2025', role: 'Product Designer', company: 'Raba' },
 { period: '2023-present', role: 'Frontend Developer', company: 'Freelencer' },
 { period: '2024-present', role: 'wordpress developer', company: 'Freelancer' },

]

export default function WookExp() {
 return (
  <section className="mt-16 w-full px-4 pb-12 sm:px-6">
   <div className="h-px w-full bg-black/10" />

   <h2 className="mt-10 text-2xl font-bold tracking-tight text-black sm:text-3xl">
    Work Experience
   </h2>

   <div className="mt-8 space-y-7 sm:space-y-8">
    {experiences.map((item) => (
     <div
      key={`${item.period}-${item.company}`}
      className="grid items-center gap-4 sm:gap-12 md:gap-16 sm:grid-cols-[170px_1fr]"
     >
      <p className="text-sm text-black/45 sm:text-sm">{item.period}</p>

      <p className="text-base text-black/75 sm:text-base">
       {item.role} <span className="text-black/45">at</span>{' '}
       <span className="inline-flex items-center rounded-xl bg-indigo-50 px-3 py-1.5 text-[#5a46ff]">
        <span className="mr-1.5 text-sm">○</span>
        {item.company}
       </span>
      </p>
     </div>
    ))}
   </div>
  </section>
 )
}
