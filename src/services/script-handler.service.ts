export async function getScript(url: string): Promise<void> {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.integrity = 'sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=';
        script.crossOrigin = '';
        script.onload = () => resolve();

        document.head.appendChild(script);
    });
}

export async function getStylesheet(url: string): Promise<void> {
    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.integrity = 'sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=';
        link.crossOrigin = '';
        link.onload = () => resolve();

        document.head.appendChild(link);
    });
}