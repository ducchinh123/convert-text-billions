<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const fonts = ref([
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
    }
]);

const updateText = (event) => {
  const text = event.target.value;
  fonts.value.forEach((font) => {
    font.transformedText = applyFontTransformations(text, font.actions);
  });
};

const applyFontTransformations = (text, actions) => {
  let transformedText = text;
  actions.forEach((action) => {
    if (action.action === "normalize" && action.type === "NFD") {
      transformedText = transformedText.normalize("NFD");
    }
    if (action.action === "shift_code_point") {
      transformedText = transformedText
        .split('')
        .map((char) => {
          const codePoint = char.codePointAt(0);
          if (codePoint >= action.range[0] && codePoint <= action.range[1]) {
            return String.fromCodePoint(codePoint + action.add);
          }
          return char;
        })
        .join('');
    }
  });
  return transformedText;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Đã sao chép!');
  }).catch(err => {
    console.error('Error copying text: ', err);
  });
};

</script>

<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <input
          type="text"
          placeholder="Soạn thảo hoặc sao chép, dán văn bản ở đây."
          class="form-control p-2"
          @keyup="updateText"
        />
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="row mt-3">
          <div class="col-md-6 mb-3" v-for="font in fonts" :key="font.slug">
            <div class="card">
              <div class="card-header text-center">
                <RouterLink :to="{ name: 'detail', params: { fname: font.slug } }" style="color: unset; text-decoration: none">
                  {{ font.label }}
                </RouterLink>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ font.transformedText || "Đ𝐚̂𝐲 𝐥𝐚̀ 𝐤𝐢𝐞̂̉𝐮 𝐯𝐚̆𝐧 𝐛𝐚̉𝐧 𝐦𝐚̂̃𝐮 𝐜𝐡𝐨 𝐥𝐨𝐚̣𝐢 𝐩𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐮̛̃ 𝐧𝐚̀𝐲" }}
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button class="btn btn-outline-secondary" @click="copyToClipboard(font.transformedText)">Sao chép</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-10 content-wel">
        <div class="mb-3">
          <h2>Cách tạo Văn bản Đẹp mắt</h2>
          <p>
            Bạn có thể tạo văn bản đẹp mắt với Công cụ Chuyển đổi Phông chữ Trực tuyến. Bạn chỉ cần viết văn bản mình muốn làm đẹp vào hộp phía trên. Bạn có thể dùng bất kỳ ký tự nào mình muốn lúc soạn thảo văn bản. Cuối cùng thì, bạn có thể nhấp vào biểu tượng sao chép kế các kiểu phông chữ để sao chép kiểu phông chữ mà mình muốn.
          </p>
        </div>

        <div class="mb-3">
          <h2>Công cụ Thay đổi Phông chữ Trực tuyến là gì?</h2>
          <p>
            Công cụ Thay đổi Phông chữ Trực tuyến là một công cụ trực tuyến cho phép bạn viết các văn bản sành điệu trên Instagram, Twitter, WhatsApp, Facebook, Discord, and Skype. Ngoài các diễn đàn này, bạn cũng có thể dùng công cụ này để tạo một biệt danh sành điệu. Bạn có thể làm biệt danh của mình thú vị hơn trên các game chẳng hạn như PUBG, CS: GO và tạo ra các biệt danh đẹp mắt của 2024 với các kiểu phông chữ khác nhau.
          </p>
        </div>

        <div class="mb-3">
          <h2>Công cụ Thay đổi Phông chữ hoạt động như thế nào?</h2>
          <p>
            Dù số ký tự trên bàn phím của bạn là có hạn, các máy tính và điện thoại lại có thể nhận diện được hàng chục ngàn ký tự. Các máy tính chỉ hỗ trợ 128 ký tự (ASCII) trong quá khứ bây giờ có thể hỗ trợ và nhận diện nhiều ký tự nhờ vào Unicode. Hơn nữa, hàng năm tiêu chuẩn Unicode đều mở rộng với nhiều ký tự, biểu tượng, và emoji hơn, và nhiều ký tự mới, từ lá cờ của các nước đến các biểu tượng khác nhau, đã có thể được hiểu bởi tất cả các máy tính.
          </p>
          <p>
            Công cụ Tạo Phông chữ cho phép bạn viết văn bản đẹp mắt có thể dùng được trên các diễn đàn như WhatsApp, Instagram, và nhiều game trực tuyến bằng cách dùng các biểu tượng không có trên bàn phím. Lúc làm điều này, nó sẽ thay đổi từng chữ cái bạn nhập vào bằng các biểu tượng văn bản.
          </p>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<style scoped>
.content-wel h2 {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.content-wel p {
  font-size: 1rem;
  line-height: 1.5;
}

.card-header {
  font-size: 1.25rem;
}

.btn {
  margin-top: 0.5rem;
}
</style>
