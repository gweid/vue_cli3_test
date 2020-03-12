
import { post } from '@/common/request';
import request from "@/common/http"

export function login(data) {
    return request.post('/e-login', data)
}