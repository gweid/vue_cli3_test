
import { post } from '@/common/request';

export function login(data) {
    return post('/e-login', data)
}