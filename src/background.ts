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

    addButton(bookTitle);
}

function isBookDetailPage(): boolean {
    const isBookCategory =
        document
            .querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")
            ?.textContent?.trim() === "本";

    const isBookFromProductSubtitle = /\s*(Kindle.*|.*本.*)\s*/.test(
        document.querySelector("#productSubtitle")?.textContent?.trim() || "",
    );

    return isBookCategory || isBookFromProductSubtitle;
}

function getBookTitle(): string {
    let bookTitle = document.querySelector("#productTitle")?.textContent?.trim();
    if (bookTitle === undefined || bookTitle?.length === 0) {
        return "";
    }

    // Remove publisher text
    bookTitle = bookTitle.replace(/\s*\(.+(文庫|ノベルライト|専門書)\)$/, "");
    // Remove 特典付き text
    bookTitle = bookTitle.replace(/\s*【.*特典付き?】\s*/, "");
    // Remove volume number
    bookTitle = bookTitle.replace(/\s*(\d+)\s*$/, "");

    return bookTitle.trim();
}

function addButton(bookTitle: string): void {
    const container = document.createElement("div");
    container.setAttribute("style", "display: flex; justify-content: center;");

    const buttons = [
        createBookTitleCopyButton(bookTitle),
        createMercariSearchButton(bookTitle),
        createRakumaSearchButton(bookTitle),
    ];
    for (let i = 0; i < buttons.length; i++) {
        container.appendChild(buttons[i]);
    }

    document.querySelector("#dp-container")?.prepend(container);
}

function createBookTitleCopyButton(bookTitle: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = "Copy Title";
    button.onclick = () => {
        navigator.clipboard.writeText(bookTitle);
    };

    return button;
}

function createMercariSearchButton(bookTitle: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = "Search Mercari";
    button.onclick = () => {
        window.open(
            `https://jp.mercari.com/search?keyword=${encodeURI(
                bookTitle,
            )}&category_id=5&order=asc&sort=price&status=on_sale`,
        );
    };

    return button;
}

function createRakumaSearchButton(bookTitle: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = "Search Rakuma";
    button.onclick = () => {
        window.open(
            `https://fril.jp/s?query=${encodeURI(
                bookTitle,
            )}&sort=sell_price&order=asc&transaction=selling`,
        );
    };

    return button;
}

main();
