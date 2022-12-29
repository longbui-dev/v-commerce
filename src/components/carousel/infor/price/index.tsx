import './Price.scss'

function Price(props: any) { 
    return (
        <div className="flex flex-row justify-start items-start pt-6">
            <div className="flex flex-row justify-start items-start font-medium price">$ 399.000</div><del className="text-stone-400 pl-4 font-medium">$ 499.000</del>
        </div>
    )
}

export default Price;