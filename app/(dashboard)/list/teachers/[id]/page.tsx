import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-1 gap-4 p-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* userInfo Card  */}
          <div className="bg-cardHeading py-6 px-4 rounded-md flex-1 flex gap-4 ">
            <div className="w-1/3 ">
              <Image
                className="rounded-full w-36 h-36 object-cover "
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="view"
                width={144}
                height={144}
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4 text-cardBackground">
              <h1 className="font-semibold text-sm">Shajib Hasan</h1>
              <span className="text-xs font-semibold text-iconSecondary">
                Senior Science Teacher
              </span>
              <p className="text-xs text-cardBackground/40">
                Ms. Sabrina Rahman is a passionate and dedicated high school
                teacher with over 10 years of experience in teaching science
                subjects.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full  text-iconSecondary md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>B+</span>
                </div>
                <div className="w-full  text-iconSecondary md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="blood" width={14} height={14} />
                  <span>Nov 2000</span>
                </div>
                <div className="w-full  text-iconSecondary md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="blood" width={14} height={14} />
                  <span>shajibhassan71@gmail.com</span>
                </div>
                <div className="w-full text-iconSecondary  md:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>+8801626009524</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards  */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* Card  */}
            <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="attendance"
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <div className="font-semibold text-xl text-iconAccent">90%</div>
                <span className="text-xs text-iconPrimary">Attendance</span>
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md flex  gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="Class"
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <div className="font-semibold text-xl text-iconAccent">6</div>
                <span className="text-xs text-iconPrimary">Classes</span>
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="lesson"
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <div className="font-semibold text-xl text-iconAccent">6</div>
                <span className="text-xs text-iconPrimary">Lesson</span>
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="lesson"
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <div className="font-semibold text-xl text-iconAccent">2</div>
                <span className="text-xs text-iconPrimary">Branch</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px] text-iconAccent">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="font-semibold mb-2 text-xl">Shortcut's</h1>

          <div className="flex gap-3 flex-wrap text-xs text-iconAccent">
            <Link className="p-2 rounded-md bg-amber-300" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-2 rounded-md bg-pink-300" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-2 rounded-md bg-indigo-400" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-2 rounded-md bg-emerald-300" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-2 rounded-md bg-purple-300" href="/">
              Teacher&apos;s Assignment
            </Link>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
