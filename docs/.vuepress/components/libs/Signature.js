export default class Signature {
    constructor({
        canvasDom,
        width = 300,
        height = 300,
        background = '#ffffff',
        strokeStyle = '#000000',
        lineWidth = 1
    }) {
        this.width = width
        this.height = height
        this.background = background
        this.strokeStyle = strokeStyle
        this.content = canvasDom
        this.isPC = this.mediaQueries()
        this.mouseDown = false
        this.lineWidth = lineWidth
    }
    moveStart () {
        if (this.isPC) {
            this.mouseDown = true
        }
        this.content.getContext('2d').beginPath()
    }
    moveOn (event, father) {
        if (this.isPC && !this.mouseDown) {
            return
        }
        let ctx = this.content.getContext('2d')
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        const clientX = this.isPC ? event.clientX - father.getBoundingClientRect().left : event.touches[0].clientX - father.getBoundingClientRect().left
        const clientY = this.isPC ? event.clientY - father.getBoundingClientRect().top : event.touches[0].clientY - father.getBoundingClientRect().top
        ctx.lineTo(clientX, clientY)
        ctx.stroke()
    }
    moveEnd () {
        if (this.isPC) {
            this.mouseDown = false
        }
        this.content.getContext('2d').closePath()
    }
    clear () {
        this.content.getContext('2d').clearRect(0, 0, this.width, this.height)
    }
    save (type, quality) {
        // 默认为 image/png ，若为 image/webp image/jpeg image/jpg 可设置质量（0-1）
        return this.content.toDataURL(type, quality)
    }
    // return: true 是pc ， false 是移动设备
    mediaQueries () {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
}