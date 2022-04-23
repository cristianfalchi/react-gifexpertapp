import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Los hooks pueden tener estados
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    // no pueden se async
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category]);

    return state; // {data: [], loading: true}
}