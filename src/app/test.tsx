'use client';

import { memo, useCallback, useEffect, useRef, useState } from 'react';

const items: string[] = [];
for (let i = 0; i < 1000; i++) {
    items.push(`${i + 1} item`);
}
items.reverse()
const pageSize = 10;
const Container = memo(() => {
    const [list, setList] = useState<string[]>([]);
    const lastIndexRef = useRef(0)
    const loadingRef = useRef(false)
    const getNextPage = useCallback(() => {
        if (loadingRef.current) { return }
        loadingRef.current = true
        setTimeout(() => {
            const sli = items.slice(lastIndexRef.current, lastIndexRef.current + pageSize)
            console.log('反悔。。。', sli)
            setList(prev => [...prev, ...sli])
            lastIndexRef.current = lastIndexRef.current + pageSize
            loadingRef.current = false
        }, 1000)
    }, [])
    useEffect(() => {
        getNextPage()
    }, [getNextPage])
    return (
        <div 
            onScroll={(e) => {
                const maxV = e.target.scrollHeight - e.target.clientHeight
                if((maxV - Math.abs(e.target.scrollTop)) < 100){
                    console.log('getnext pages')
                    getNextPage()
                }
            }} 
            className="h-[500px] flex flex-col-reverse w-[600px] border border-red-600 overflow-auto">
            {
                list.map(item => {
                    return <div key={item} className="h-[40px] flex-shrink-0 bg-amber-200 mb-4">{item}</div>
                })
            }
        </div>
    );
});

Container.displayName = 'Container';

export default Container;
