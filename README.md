# convert_text_billion
Dự án đem đến công cụ chuyển đổi nội dung văn bản sang các kiểu phông chữ khác nhau
# Vue 3
# Chạy
# Git learn: https://tuantda.github.io/gitref-vi/branching/
```
npm install
npm  run dev


<input type="text" />
<ul></ul>
<script>
  const input = document.querySelector("input");

  input.onkeyup = function (e) {
    updateText(this.value);
  };
  const tag_ul = document.querySelector("ul");

  let ur_html = "";
  let list_li;

  const font = [
    {
      label: "Bold (serif)",
      slug: "bold",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119743,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119737,
        },
        {
          action: "shift_code_point",
          range: [48, 57],
          add: 120734,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Italic (serif)",
      slug: "italic",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "map_code_point",
          map: {
            104: [8462],
          },
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119795,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119789,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Bold / italic (serif)",
      slug: "bold-italic",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 119847,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 119841,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Bold (sans)",
      slug: "bold-sans",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 120211,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 120205,
        },
        {
          action: "shift_code_point",
          range: [48, 57],
          add: 120764,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Italic (sans)",
      slug: "italic-sans",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 120263,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 120257,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Bold / italic (sans)",
      slug: "bold-italic-sans",
      previewFont: "times",
      actions: [
        {
          action: "normalize",
          type: "NFD",
        },
        {
          action: "shift_code_point",
          range: [65, 90],
          add: 120315,
        },
        {
          action: "shift_code_point",
          range: [97, 122],
          add: 120309,
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Alternating Bold",
      slug: "alternating-bold",
      previewFont: "times",
      actions: [
        {
          actions: [
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 119743,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 119737,
              },
              {
                action: "shift_code_point",
                range: [48, 57],
                add: 120734,
              },
            ],
            [],
          ],
          action: "cycle",
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Alternating Italic",
      slug: "alternating-italic",
      previewFont: "times",
      actions: [
        {
          actions: [
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "map_code_point",
                map: {
                  104: [8462],
                },
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 119795,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 119789,
              },
            ],
            [],
          ],
          action: "cycle",
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Bold w/ Alternating Italic",
      slug: "bold-alternating-italic",
      previewFont: "times",
      actions: [
        {
          actions: [
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 119847,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 119841,
              },
            ],
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 120315,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 120309,
              },
            ],
          ],
          action: "cycle",
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
    {
      label: "Italic Switch Serifs",
      slug: "italic-switch-serifs",
      previewFont: "times",
      actions: [
        {
          actions: [
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "map_code_point",
                map: {
                  104: [8462],
                },
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 119795,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 119789,
              },
            ],
            [
              {
                action: "normalize",
                type: "NFD",
              },
              {
                action: "shift_code_point",
                range: [65, 90],
                add: 120263,
              },
              {
                action: "shift_code_point",
                range: [97, 122],
                add: 120257,
              },
            ],
          ],
          action: "cycle",
        },
      ],
      textStyle: {
        path: "bold-italic",
      },
    },
  ];
  renderListFont();

  async function renderListFont() {
    let html = "";
    font.forEach((element) => {
      html += `<li><a href="/${element.slug}">${element.label}</a>: <span class="text"></span></li>`;
    });
    tag_ul.innerHTML = html;
    list_li = document.querySelectorAll("li span");
  }

  function shiftCodePoint(char, rangeStart, rangeEnd, shiftValue) {
    const codePoint = char.codePointAt(0);
    if (codePoint >= rangeStart && codePoint <= rangeEnd) {
      return String.fromCodePoint(codePoint + shiftValue);
    }
    return char;
  }

  function convertText(text, actions) {
    let result = text.normalize("NFD");
    let actions_new = actions;
    if (actions[0].action == "cycle") {
      actions_new = actions[0].actions[0];
    }
    for (const action of actions_new) {
      if (action.action === "shift_code_point") {
        result = Array.from(result)
          .map((char) =>
            shiftCodePoint(char, action.range[0], action.range[1], action.add)
          )
          .join("");
      }
    }
    return result;
  }

  function updateText(text) {
    font.forEach((element, index) => {
      list_li[index].textContent = convertText(text, element.actions);
    });
  }
</script>