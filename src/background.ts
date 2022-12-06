function main() {
    if (!isBookDetailPage()) {
        console.log("This is not a book detail page. Abort...");
        return;
    }

    const bookTitle = getBookTitle();
    if (bookTitle.length === 0) {
        console.log("Unable to find books title. Abort...");
        return;
    }
}

function isBookDetailPage(): boolean {
    const category = document
        .querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")
        ?.textContent?.trim();

    return category === "本";
}

function getBookTitle(): string {
    let bookTitle = document.querySelector("#productTitle")?.textContent?.trim();
    if (bookTitle === undefined || bookTitle?.length === 0) {
        return "";
    }

    // Remove publisher text
    bookTitle = bookTitle.replace(/\s*\(.+(文庫|ノベルライト)\)$/, "");
    // Remove 特典付き text
    bookTitle = bookTitle.replace(/\s*【.*特典付き?】\s*/, "");
    // Remove volume number
    bookTitle = bookTitle.replace(/\s*(\d+)\s*$/, "");

    return bookTitle.trim();
}

main();