export const getYouTubeVideoID = (url) => {
    let videoID = null;

    // Handle URLs with v= query parameter
    if (url?.includes('v=')) {
        videoID = url.split('v=')[1]?.split('&')[0];
    }
    // Handle shortened YouTube URLs like https://youtu.be/VIDEO_ID
    else if (url?.includes('youtu.be/')) {
        videoID = url.split('youtu.be/')[1].split('?')[0];
    } else {
        videoID = url
    }

    return videoID;
};

const arabicMonths = [
    "يناير", // January
    "فبراير", // February
    "مارس", // March
    "أبريل", // April
    "مايو", // May
    "يونيو", // June
    "يوليو", // July
    "أغسطس", // August
    "سبتمبر", // September
    "أكتوبر", // October
    "نوفمبر", // November
    "ديسمبر"  // December
];

export const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");

    return (
        <>
            <span className="en-txt">{year}</span>
            <span className="mx-1">{arabicMonths[parseInt(month, 10) - 1]}</span>
            <span className="en-txt">{day}</span>
        </>
    );
};

export const wrapNumbersInSpan = () => {
    // Define the regex for Arabic and English numbers
    const numberRegex = /[\u0660-\u0669\u0030-\u0039]/g;

    // Function to wrap matched numbers in a span
    function wrapMatch(match) {
        const span = document.createElement('span');
        span.className = 'en-txt';
        span.textContent = match;
        return span;
    }

    // Recursive function to process text nodes
    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const parts = node.nodeValue.split(numberRegex);
            const matches = node.nodeValue.match(numberRegex);

            if (matches) {
                const fragment = document.createDocumentFragment();

                parts.forEach((part, index) => {
                    fragment.appendChild(document.createTextNode(part));
                    if (index < matches.length) {
                        fragment.appendChild(wrapMatch(matches[index]));
                    }
                });

                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(child => processNode(child));
        }
    }

    // Start processing from the body element
    processNode(document.body);
}

export const getUrlParams = () => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
        // Your code using sessionStorage here
        const urlParams = sessionStorage.getItem("urlParams");
        return urlParams ? urlParams : "";
    }
}

export const setPageName = (name) => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
        sessionStorage.setItem("pageName", name)
    }
}
