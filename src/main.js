const $siteList = $(".siteList");
const $lastLi = $siteList.find(".last");

const string = localStorage.getItem("x");
const stringObject = JSON.parse(string);

const hashMap = stringObject || [
  { logo: "G", logoType: "text", url: "https://www.google.hk" },
  { logo: "B", logoType: "text", url: "https://www.baidu.com" },
  { logo: "bilibili.jpg", logoType: "image", url: "https://www.bilibili.com" }
];

const removeUrl = url => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};

const $paint = () => {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    let $li;
    if (node.logoType === "text") {
      $li = $(`<li>
            <div class="site">
                <div class="logo">${node.logo[0]}</div>
                <div class="link">${removeUrl(node.url)}</div>
                <div class="close">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-close"></use>
                </svg>
                </div>
            </div>
          </li>`).insertBefore($lastLi);
    } else if (node.logoType === "image") {
      $li = $(`<li>
            <div class="site">
                <div class="logo"><img src="${node.logo}"></div>
                <div class="link">${removeUrl(node.url)}</div>
                <div class="close">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-close"></use>
                </svg>
                </div>
            </div>
          </li>`).insertBefore($lastLi);
    } else {
      return false;
    }

    $li.on("click", () => {
      window.open(node.url);
    });
    //阻止冒泡
    $li.on("click", ".close", e => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      $paint();
    });
  });
};

$paint();

$(".addButton").on("click", () => {
  let url = window.prompt("请输入要添加的网站名");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }

  hashMap.push({
    logo: removeUrl(url)[0].toUpperCase(),
    logoType: "text",
    url: url
  });

  $paint();
});

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  // window.localStorage.setItem("x", string);
};

$(document).on("keypress", e => {
  // const key = e.key;
  const { key } = e;
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url);
    }
  }
});
