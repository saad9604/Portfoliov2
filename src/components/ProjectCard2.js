import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import projectsData2 from '../projectData2';

const ProjectCard2 = ({ project }) => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {projectsData2.map((project) => (
                    <div className='mx-auto'>
                        <SwiperSlide>
                            <div className='flex items-center lg:justify-center justify-between max-w-[90%] mx-auto lg:pb-0 pb-2'>
                                <p className='lg:text-center  lg:ml-0  name text-[1rem] mb-2 font-bold'>{project.title}</p>
                                <div className='lg:hidden flex'>
                                    <a target='_blank' href={project.link}>
                                        <img src={project.live} alt='Live' width={40} height={10}  />
                                    </a>
                                    <a target='_blank' href={project.gitLink}>
                                        <img src={project.github} alt='GitHub' width={40} height={10} />
                                    </a>
                                </div>
                            </div>
                            <div className='mx-auto min-w-[350px] max-w-[350px] border-[2px] rounded-3xl lg:-translate-x-16'>
                                <img src={project.image} alt={project.title} width={350} height={200} className='max-h-[300px] rounded-3xl lg:min-w-[500px] min-h-[300px]  object-fill shadow-blue-500 shadow-xl' />
                            </div>
                            <div className='lg:flex hidden lg:flex-row justify-center bottom-[360px] left-6 lg:p-5 p-5  items-center  relative lg:left-[7.4%] gap-3 lg:bottom-[357px] z-30'>
                                <a target='_blank' href={project.link}>
                                    <img src={project.live} alt='Live' className='lg:w-7'/>
                                </a>
                                <a target='_blank' href={project.gitLink}>
                                    <img src={project.github} alt='GitHub' className='lg:w-7' />
                                </a>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectCard2;
