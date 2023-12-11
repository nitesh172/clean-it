import Button from '@/components/Button/Button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  const list = [
    {
      title: 'Customer Management',
      point1: 'Add and manage customer profiles.',
      point2: 'Store details for multiple customer locations.',
      imageUrl: '/customer-service.svg',
    },
    {
      title: 'Booking and Scheduling',
      point1: 'User-friendly interface for easy booking of cleaning services.',
      point2: 'Flexible scheduling options toaccommodate varying needs.',
      imageUrl: '/booking.svg',
    },
    {
      title: 'Task Tracking',
      point1: 'Real-time tracking of cleaning tasks and service schedules.',
      point2: 'Monitor task progress and completion status.',
      imageUrl: '/to-do-list.svg',
    },
    {
      title: 'Automated Reminders',
      point1: 'Send automated reminders to customers and',
      point2: 'Send automated remainders to employees for upcoming cleaning',
      imageUrl: '/reminder.svg',
    },
  ]

  const analytic = [
    {
      title: 'Users at CleanIT',
      number: 1211,
    },
    {
      title: 'Cleaning plans created',
      number: 12211,
    },
    {
      title: 'Customer locations managed',
      number: 155661,
    },
  ]

  return (
    <main className="relative">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-primary w-full h-[750px] md:h-[1124px] lg:h-[900px] xl:h-[800px] -z-10 relative px-6 md:px-16 bg-bubble-bg lg:bg-none">
        <div>
          <div className="text-5xl md:text-7xl font-bold text-white md:w-[500px] mb-3 pt-32">
            Elevate Workplace Cleanliness
          </div>
          <div className="text-lg lg:text-2xl font-light text-white lg:w-[500px]">
            Introducing Our Intuitive IT Platform for Office Scheduling and
            Cleaning Efficiency
          </div>
        </div>
        <Image
          width={947}
          height={710}
          priority
          src={'/bubble-hero.svg'}
          alt="background image"
          className="w-[800px] h-[710px] absolute right-0 left-0 lg:left-auto bottom-0"
        />
        <Image
          width={947}
          height={710}
          priority
          src={'/light.svg'}
          alt="background image"
          className="w-[800px] h-[710px] absolute -top-60 lg:top-0 right-0"
        />
        <Image
          width={2077}
          height={554}
          priority
          src={'/wave1.svg'}
          alt="wave1"
          className="w-full absolute bottom-4 lg:bottom-16 left-0 right-0"
        />
        <Image
          width={847}
          height={671}
          priority
          src={'/cleaner.svg'}
          alt="cleaner"
          className="lg:w-[550px] absolute bottom-6 lg:bottom-28 xl:bottom-40 right-0 lg:right-0 xl:right-28"
        />
        <Image
          width={1024}
          height={487}
          priority
          src={'/wave2.svg'}
          alt="wave2"
          className="w-full object-cover absolute -bottom-2 lg:-bottom-1 left-0 right-0"
        />
        <Image
          width={120}
          height={120}
          priority
          src={'/wiper.svg'}
          alt="wave2"
          className="w-[70px] object-cover h-[70px] absolute bottom-[170px] right-0 hidden lg:block"
        />
      </div>
      <div className="flex flex-col xl:flex-row justify-between px-6 lg:px-16">
        <Image
          src="/landscape.svg"
          alt="logo"
          className=""
          priority
          width={724}
          height={550}
        />
        <div className="flex flex-col gap-5 flex-1">
          <Image
            src="/logo-color.svg"
            alt="logo"
            className="w-44 h-12"
            priority
            width={188}
            height={50}
          />
          <div className="font-light text-4xl text-secondary">
            Welcome to our cutting-edge Office Cleaning and Scheduling platform
          </div>
          <div className="font-light text-secondaryTwo">
            seamless organization meets pristine workspaces. Our intuitive
            website empowers businesses to effortlessly manage cleaning services
            for multiple customer locations. Streamline your operations with
            features such as customer and employee management, customizable
            cleaning plans, and real-time task tracking. Experience the future
            of workplace cleanliness as you optimize schedules, automate
            reminders, and elevate communication with our innovative IT
            solution. From booking to billing, our platform is designed for
            efficiency, ensuring a tailored, secure, and hassle-free experience
            for businesses seeking a new standard in office hygiene management.&quot;
          </div>
          <Button
            text="Try our tool"
            className="bg-primary  text-white w-fit mb-6 lg:mb-0"
          />
        </div>
      </div>
      <div className="relative flex flex-row items-center justify-center bg-primary bg-bubble-bg">
        <Image
          width={1024}
          height={100}
          priority
          src={'/wave-down.svg'}
          alt="wave2"
          className="w-full absolute -top-1 xl:-top-20 "
        />
        <div className="grid grid-cols-1 md:grid-cols-3 py-60 lg:py-80 items-center gap-16 md:gap-6 lg:gap-16 xl:gap-48 px-6">
          {analytic.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center w-64 h-64"
              >
                <div>
                  <div className="text-xl lg:text-3xl text-white font-extrabold">
                    {item.number}
                  </div>
                  <div className="text-white md:text-xs lg:text-base xl:text-sm font-light">{item.title}</div>
                </div>
                <Image
                  width={250}
                  height={250}
                  priority
                  src={'/bubble.svg'}
                  alt="wave2"
                  className="flex flex-col absolute md:w-52 md:h-52 lg:w-64 lg:h-64"
                />
              </div>
            )
          })}
        </div>
        <Image
          width={1024}
          height={100}
          priority
          src={'/wave-down2.svg'}
          alt="wave2"
          className="w-full absolute -bottom-1 left-0"
        />
      </div>
      <div className="mb-28 px-6 lg:px-16 mt-5">
        <div className="font-light text-4xl text-secondary mb-4 text-center">
          CleanIT makes your daily operations smoother with
        </div>
        <div className="font-light text-secondaryTwo mb-14 text-center">
        &quot;CleanIT, your ultimate ally in workplace hygiene, streamlines daily
          operations, ensuring a seamless and efficient cleaning management
          experience. From scheduling tasks to overseeing cleanliness, CleanIT
          simplifies it all, making your workday effortlessly organized and
          stress-free.&quot;
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-3xl border p-10 flex flex-col gap-4"
              >
                <Image
                  width={80}
                  height={80}
                  priority
                  src={item.imageUrl}
                  alt="option"
                  className=""
                />
                <div className="font-light text-4xl text-secondary">
                  {item.title}
                </div>
                <div className="font-light text-secondaryTwo ">
                  {item.point1}
                </div>
                <div className="font-light text-secondaryTwo ">
                  {item.point2}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mb-28 px-6 lg:px-16">
        <div className="font-light text-4xl text-secondary text-center mb-14">
          Testimonials
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border p-10 flex flex-col xl:flex-row items-center gap-8">
            <Image
              width={200}
              height={200}
              priority
              src="/customer.svg"
              alt="option"
              className=""
            />
            <div className="flex flex-col gap-6">
              <div className="font-light text-2xl text-secondary">
                CleanIT helps me keep track of all the loose ends and ensures a
                clear overview. In an everyday life with + 50 employees, it is
                important not to lose sight of it.
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Image
                      key={item}
                      width={16}
                      height={16}
                      priority
                      src="/star.svg"
                      alt="star"
                      className=""
                    />
                  ))}
                </div>
                <div className="font-light text-lg">4.8/5 Star</div>
              </div>
              <div className="font-medium italic text-lg text-secondaryTwo">
                Cliff Nielsen, Director of Cklar Service ApS
              </div>
            </div>
          </div>
          <div className="rounded-3xl border p-10 flex flex-col xl:flex-row gap-8">
            <Image
              width={200}
              height={200}
              priority
              src="/customer2.svg"
              alt="option"
              className=""
            />
            <div className="flex flex-col gap-6">
              <div className="font-light text-2xl text-secondary">
                CleanIT helps me keep track of all the loose ends and ensures a
                clear overview. In an everyday life with + 50 employees, it is
                important not to lose sight of it.
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Image
                      key={item}
                      width={16}
                      height={16}
                      priority
                      src="/star.svg"
                      alt="star"
                      className=""
                    />
                  ))}
                </div>
                <div className="font-light text-lg">4.8/5 Star</div>
              </div>
              <div className="font-medium italic text-lg text-secondaryTwo">
                Cliff Nielsen, Director of Cklar Service ApS
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
