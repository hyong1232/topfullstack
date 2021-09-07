import axios from '@/utils/request';

export function getCurseById(params: any): Promise<any> {
    return axios({
        url:  `curses/${params}`,
    })
}

export function getCurses(params?: any): Promise<any> {
    return axios({
        url: 'curses',
        params,
    })
}

export function createCurse(params:  any): Promise<any>{
    return axios({
        url: 'curses',
        data: params,
        method: 'post'
    });
}