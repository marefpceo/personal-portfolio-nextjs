import TechStackDiv from '@/components/TechStackDiv'

export default function AboutSection() {

  return (
    <section id='about' className='py-6 px-4 h-full flex flex-col gap-8 items-center bg-nature-light 
      min-w-full text-nature-dark text-center'
    >
      <h2 className='text-3xl mt-4'>About</h2>
      <div className="about-body space-y-6">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus ea eveniet enim asperiores, quae voluptas nihil quidem iusto officiis placeat ullam? Doloribus, alias dolorem consequuntur mollitia eum eaque ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic, quae iusto minus quis dicta magnam eligendi officiis deleniti veritatis error id impedit ipsum repellendus dolor, doloremque sit, dignissimos tempore.</p>
      </div>
      
      <TechStackDiv />
      
    </section>
  )
}