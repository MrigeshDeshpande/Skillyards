import { NextResponse } from "next/server"

export function success(data= null, message = null) {
    return NextResponse.json({
        success: true,
        data,
        message
    })
}

export function error(message = null, data = null) {
    return NextResponse.json({
        success: false,
        data,
        message
    })
}