(() => {
    type EventNames = 'click' | 'scroll' | 'mousemove'

    function handleEvent(ele: HTMLElement | null, event: EventNames) {
        // Do something
    }

    handleEvent(document.getElementById('hello'), 'scroll')
    handleEvent(document.getElementById('world'), 'click')
})()