import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Audio } from 'react-loader-spinner'
import { IoAddCircleOutline } from "react-icons/io5";
import ImageSlider from './components/ui/ImageSlider';
import Convein1 from '../src/assets/images/convein1.jpg'
import Convein2 from '../src/assets/images/convein2.jpg'
import Convein3 from '../src/assets/images/convein3.jpg'
import Center1 from '../src/assets/images/center1.jpg'
import Center2 from '../src/assets/images/center2.jpg'
import Christmas from '../src/assets/images/christmas.png'
import MiraFoot from '../src/assets/images/mirafoot.jpg'
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    },[])



  return (
    <>
        {
            loading ? 
            <div className='flex items-center justify-center h-screen'>

                  <Audio
                      height="80"
                      width="80"
                      radius="9"
                      color="green"
                      ariaLabel="three-dots-loading"
                      wrapperStyle
                      wrapperClass
                      />
                      </div>
                   :
        
        <div>

        
        <div className="bg-[url(../src/assets/images/miraback.png)] p-4 h-[100vh] bg-cover" >
         <nav className='flex items-center justify-between px-4 lg:px-16 py-4'>
  <NavLink>
    <h1 className='font-Quicksand text-xl font-medium text-white'>Mirae Asset CENTER1</h1>
  </NavLink>

 
  <ul className='hidden lg:flex gap-4 font-normal text-lg font-Quicksand justify-around text-white'>
    {['Home', 'Pages', 'Portfolio', 'Blog', 'Contact'].map((item) => (
      <NavLink key={item}>
        <li className='group cursor-pointer'>
          {item}
          <div className='w-0 h-0.5 bg-[#F58220] rounded-sm group-hover:w-full ease-linear duration-300'></div>
        </li>
      </NavLink>
    ))}
  </ul>

  {/* Mobile Menu Icon */}
  <div className='lg:hidden'>
    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-white text-2xl'>
      {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>
  <div><FaGlobe className='text-white text-2xl'/></div>
</nav>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
  <ul className='lg:hidden flex flex-col gap-4 bg-[#242424] px-6 py-4 text-white font-Quicksand text-lg'>
    {['Home', 'Pages', 'Portfolio', 'Blog', 'Contact'].map((item) => (
      <NavLink key={item} onClick={() => setIsMobileMenuOpen(false)}>
        <li className='group cursor-pointer'>
          {item}
          <div className='w-0 h-0.5 bg-[#F58220] rounded-sm group-hover:w-full ease-linear duration-300'></div>
        </li>
      </NavLink>
    ))}
  </ul>
)}

            <motion.div
            initial={{ opacity: 0, y: 160 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2 }}
            className="max-w-xl text-white"
            >

            <div className='flex flex-col justify-start tracking-widest lg:ml-36 pt-8 leading-loose my-20'>
                <h1 className='text-6xl font-Dmsans font-bold text-white pb-5'>THE 1<span>st</span></h1>
                <h1 className='text-6xl font-Dmsans tracking-widest font-bold text-white '>BUILDING</h1>
                <h3 className='text-white font-medium text-sm'><span className='text-xl'>최고의 공간을 경험하세요</span><br/> 국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다</h3>
            </div>
            </motion.div>
        </div>
        <div className='bg-[#242424] py-12 px-10'>
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className=" text-white"
            >

            <div className='my-8 w-1/2 sma:w-full mda:w-full'>
                <h1 className='text-3xl font-Dmsans font-medium text-white '>Convenience</h1>
                <h3 className='text-white font-bold text-lg'>미래에셋센터원에서 경험하는 특별한 서비스 <span className='text-[#F58220]'>경험하는 특별한 서비스</span> </h3>
            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className=" text-white"
            >

            <div className='flex sma:flex-col mda:flex-col justify-around'>
                <div className='group'>
                    <img src={Convein1}  alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>KF GALLERY</h1>
                    <p className='text-white font-medium w-[90%]'>국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제 교류를 촉진하는 다양한 전시와 행사에 참여해보세요.</p>
                </div>
                <div className='group'>
                    <img src={Convein2}  alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans  group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>센터원 Wellness</h1>
                    <p className='text-white font-medium w-[90%]'>피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나, PT(퍼스널트레이닝) 등 운영 
                    바쁜 일상과 업무에서 잠시 휴식을 취해보세요.</p>
                </div>
                <div className='group'>
                    <img src={Convein3}  alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>SPARKPLUS</h1>
                    <p className='text-white font-medium w-[90%]'>원하는 인원만큼 사용할 수 있는 맞춤형 오피스일에만 집중할 수 있는 완벽한 공유 오피스를 만나보세요</p>
                </div>
            </div>
            </motion.div>
        </div>
        <div className='bg-[url(../src/assets/images/environ.jpg)] h-[100vh] bg-cover'>
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className=" text-white"
        >

            <div className=' sma:pt-10 lg:pt-36 ml-10 w-[60%]'>
                <h1 className='text-6xl sma:text-4xl mda:text-4xl font-Dmsans font-medium text-white tracking-wide'>The 1<sup>st</sup> Environment you 
                would imagine</h1>

                  <p className='text-white font-medium mt-20 '>서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과 퇴근길에 만나는 청계천의 여유로움은
                      CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다.
                    이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로 인증받았습니다.</p>

                <button className='hover:bg-transparent border ease-linear duration-300 bg-[#F58220] text-white px-5 py-2 rounded-md mt-10'>view more &rarr;</button>
            </div>
        </motion.div>
        </div>


        <div className='bg-[#242424] py-12 px-10'>
            <div className='pb-14'>
                <h1 className='text-4xl font-Dmsans font-medium text-white tracking-wide'>ONLY CENTER <sup>1</sup></h1>
                <p className='text-white text-2xl font-medium mt-10 '>미래에셋센터원에서만 누리는 <span className='text-[#F58220]'>특별한 혜택</span></p>
            </div>
            <div className='flex sma:flex-col sma:gap-4 mda:gap-4 mda:flex-col justify-around mb-20'>
                <div className='group'>
                    <img src={Center1} loading='lazy' alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>프라임 서비스</h1>
                    <p className='text-white font-medium w-[90%]'>임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등
                    입주사 임직원을 위한 차별화된 서비스를 제공합니다.</p>
                </div>
                <div className='group'>
                    <img src={Center2} loading='lazy' alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans  group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>E-pit 전기차 충전소</h1>
                    <p className='text-white font-medium w-[90%]'>미래에셋센터원 주차장에는 전기차 이용자들을 위해
                    일반 충전소 외에도 E-pit 전기차 충전소가 마련되어 있습니다.</p>
                </div>
                <div className='group'>
                    <img src={Convein3} loading='lazy' alt="" className='w-[350px] group-hover:-translate-y-4 ease-linear duration-300 cursor-pointer h-[320px] rounded-sm' />
                    <h1 className='text-2xl font-Dmsans group-hover:text-[#F58220] text-white ease-linear duration-300 pt-3'>주차요금 할인</h1>
                    <p className='text-white font-medium w-[90%]'>오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 
                    최대 8천원으로 부담없이 미래에셋센터원을 즐길 수 있습니다</p>
                </div>
            </div>
        </div>
        <div className='bg-[#ECEFF1] py-12'>
            <div className='flex sma:flex-col mda:flex-col sma:gap-4 mda:gap-4 justify-around sma:pl-4 mda:pl-4 lg:items-start'>
                <div className='w-[350px]'>
                    <div className='flex justify-between'>
                    <h1 className='text-2xl font-Dmsans font-medium'>지금 살펴봐야할 이벤트</h1>
                    <IoAddCircleOutline className='text-3xl cursor-pointer text-[#00427A]'/>
                    </div>
                    <img src={Christmas} loading='lazy' alt="" className='py-6 w-[350px] sma:w-[260px]' />
                    <h1 className='text-2xl font-Dmsans font-medium'>미래에셋센터원 크리스마스 작은 음악회</h1>
                    <ul className='list-disc mb-5 font-Dmsans'>
                        <li>공연 주제 : 재즈 공연</li>
                        <li>장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및 커피 배포)</li>
                    </ul>
                    <p className='font-medium opacity-70 font-Dmsans'>2024.12.20(금)~2024.12.20(금)</p>
                </div>
                <div className='basis-[40%]'>
                    <div className='flex justify-between mb-8'>
                        <h1 className='text-2xl font-Dmsans font-medium'>센터원 소식</h1>
                        <IoAddCircleOutline className='text-3xl cursor-pointer text-[#00427A]'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-Dmsans font-medium'>미래에셋센터원 홈페이지 리뉴얼 안내</h1>
                        <p className='font-medium mb-5'>미래에셋센터원 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은 서비스 제공을 위해 불편한</p>
                        <p className='font-medium opacity-70 font-Dmsans'>2024.09.04(수)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#242424]'>
            <div className='flex justify-center gap-4 items-center py-12'>
                <div className='items-end self-end scale-x-[-1]'>
                    <div className='w-32 sma:w-16 mda:w-16 mb-1 h-0.5 rounded-s-xl bg-slate-600 '></div>
                    <div className='w-36 sma:w-20 mda:w-20 mb-1 h-0.5 bg-slate-600'></div>
                    <div className='w-40 sma:w-24 mda:w-24 mb-1 h-0.5 bg-slate-600'></div>
                    <div className='w-44 sma:w-28 mda:w-28 mb-1 h-0.5 bg-slate-600'></div>
                </div>
                <div>
                <h1 className='text-4xl font-Dmsans pb-1 font-medium text-white text-center tracking-wide'>CENTER <sup>1</sup></h1>
                <h3 className='text-2xl font-Dmsans font-medium text-white tracking-wide'>미래에셋센터원 <span className='text-[#F58220]'>AVENUE</span></h3>
                </div>
                <div className='items-end self-end scale-x-[1]'>
                    <div className='w-32 sma:w-16 mda:w-16 mb-1 h-0.5 bg-slate-600'></div>
                    <div className='w-36 sma:w-20 mda:w-20 mb-1 h-0.5 bg-slate-600'></div>
                    <div className='w-40 sma:w-24 mda:w-24 sma mb-1 h-0.5 bg-slate-600'></div>
                    <div className='w-44 sma:w-28 mda:w-28 mb-1 h-0.5 bg-slate-600'></div>
                </div>
            </div>
            <div className=''>
                <ImageSlider/>
            </div>
        <div className=' relative p-4 h-[450px] bg-cover self-center my-6 bg-no-repeat'>
            <img src={MiraFoot} className='absolute top-0 left-0 w-full h-full'  alt="" />
        </div>
        <div className=' bg-[#242424] py-6'>
            <div className='px-10 text-white flex sma:flex-col mda:flex-col justify-around py-10 items-start'>
                <div className='basis-[50%]'>
                <h1 className='font-Quicksand text-xl font-medium text-white mb-5'>Mirae Asset CENTER1</h1>
                <p className='font-medium  font-Dmsans mb-2'>주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구 을지로 5길 2)</p>
                <p className='font-medium  opacity-70 font-Dmsans'>대표번호 : 02-6030-0100</p>
                </div>
                <div>
                    <div className='flex sma:flex-col mda:flex-col gap-5 '>
                    <h1 className='font-Quicksand text-xl font-medium text-white mb-5'>개인정보처리방침</h1>
                    <select name="family" className=' bg-[#454444] rounded-2xl px-2 text-white p-0'  id="">
                        <option value="">Family Site</option>
                        <option value="미래에셋">미래에셋</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        }
    </>
  )
}

export default Home
