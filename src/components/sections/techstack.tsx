"use client";
import DomeGallery from '@/components/DomeGallery';

export default function TechStackCake() {
    return (
        <div className="flex md:flex-row flex-col gap-2">
            <div className="flex-1 dark:bg-zinc-900 bg-zinc-900 dark:text-zinc-100 text-zinc-900 border dark:border-zinc-800 border-zinc-200 rounded-3xl overflow-scroll h-70">
                <DomeGallery
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={100}
                    segments={34}
                    dragDampening={2}
                    
                    overlayBlurColor='#18181b'
                
                />
               
            </div>
             <div className='flex-1'></div>
        </div>
    )
}