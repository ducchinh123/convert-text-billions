<script setup>
import { ref, onMounted, watch } from "vue";
import { RouterLink } from "vue-router";
import Swal from "sweetalert2";

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
    hasPreviewImages: true,
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
    hasPreviewImages: true,
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
    hasPreviewImages: true,
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
    hasPreviewImages: false,
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
    hasPreviewImages: false,
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
    hasPreviewImages: false,
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
  },
  {
    label: "Alternating Bold",
    slug: "alternating-bold",
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
  },
  {
    label: "Alternating Italic",
    slug: "alternating-italic",
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
  },
  {
    label: "Double-struck",
    slug: "double-struck",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "map_code_point",
        map: {
          67: [8450],
          72: [8461],
          78: [8469],
          80: [8473],
          81: [8474],
          82: [8477],
          90: [8484],
        },
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 120055,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 120049,
      },
      {
        action: "shift_code_point",
        range: [48, 57],
        add: 120744,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "double-struck",
    },
  },

  {
    label: "Monospace",
    slug: "monospace",
    previewFont: "system",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 120367,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 120361,
      },
      {
        action: "shift_code_point",
        range: [49, 57],
        add: 120774,
      },
    ],
    hasPreviewImages: false,
    textStyle: {
      path: "monospace",
    },
  },
  {
    label: "Sans Serif",
    slug: "sans-serif",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 120159,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 120153,
      },
      {
        action: "shift_code_point",
        range: [48, 57],
        add: 120754,
      },
    ],
    hasPreviewImages: false,
    textStyle: {
      path: "sans-serif",
    },
  },
  {
    label: "Cursive script",
    slug: "script",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "map_code_point",
        map: "cu",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 119899,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 119893,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "script",
    },
  },
  {
    label: "Bold cursive script",
    slug: "bold-script",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 119951,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 119945,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "script",
    },
  },
  {
    label: "Cursive script w/ alternating bold",
    slug: "alt-cursive",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 119951,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 119945,
      },
    ],
  },
  {
    label: "Fraktur",
    slug: "fraktur",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "map_code_point",
        map: {
          67: [8493],
          72: [8460],
          73: [8465],
          82: [8476],
          90: [8488],
        },
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 120003,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 119997,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "fraktur",
    },
  },
  {
    label: "Bold fraktur",
    slug: "bold-fraktur",
    previewFont: "times",
    actions: [
      {
        action: "normalize",
        type: "NFD",
      },
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 120107,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 120101,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "fraktur",
    },
  },
  {
    label: "Fullwidth",
    slug: "fullwidth",
    previewFont: "times",
    actions: [
      {
        action: "shift_code_point",
        range: [33, 126],
        add: 65248,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "full-width-vaporwave",
    },
  },
  {
    label: "Vaporwave (Λ & Ξ replacement)",
    slug: "vaporwave-ae",
    previewFont: "system",
    actions: [
      {
        action: "map_code_point",
        map: {
          65: [923],
          69: [926],
        },
      },
      {
        action: "shift_code_point",
        range: [33, 126],
        add: 65248,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "full-width-vaporwave",
    },
  },
  {
    label: "Vaporwave (▲ & ▼ replacement)",
    slug: "vaporwave-av",
    previewFont: "system",
    actions: [
      {
        action: "map_code_point",
        map: {
          65: [9650],
          86: [9660],
        },
      },
      {
        action: "shift_code_point",
        range: [33, 126],
        add: 65248,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "full-width-vaporwave",
    },
  },
  {
    label: "Vaporwave (Σ & ♢ replacement)",
    slug: "vaporwave-eo",
    previewFont: "system",
    actions: [
      {
        action: "map_code_point",
        map: {
          69: [931],
          79: [9826],
        },
      },
      {
        action: "shift_code_point",
        range: [33, 126],
        add: 65248,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "full-width-vaporwave",
    },
  },

  {
    label: "Bubble text",
    slug: "bubble",
    previewFont: "times",
    actions: [
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 9333,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 9327,
      },
      {
        action: "shift_code_point",
        range: [49, 57],
        add: 9263,
      },
      {
        action: "map_code_point",
        map: {
          48: [9450],
        },
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "bubble-text",
    },
  },
  {
    label: "Black bubble text",
    slug: "black-bubble",
    previewFont: "system",
    actions: [
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 127247,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 127215,
      },
      {
        action: "shift_code_point",
        range: [49, 57],
        add: 10073,
      },
      {
        action: "map_code_point",
        map: {
          48: [9471],
        },
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "bubble-text",
    },
  },
  {
    label: "Square",
    slug: "square",
    previewFont: "system",
    actions: [
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 127215,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 127183,
      },
    ],
    hasPreviewImages: false,
    textStyle: {
      path: "square-text",
    },
  },
  {
    label: "Black square",
    slug: "black-square",
    previewFont: "system",
    actions: [
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 127279,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 127247,
      },
    ],
    hasPreviewImages: false,
    textStyle: {
      path: "square-text",
    },
  },
  {
    label: "Parenthesis",
    slug: "parenthesis",
    previewFont: "times",
    actions: [
      {
        action: "shift_code_point",
        range: [65, 90],
        add: 127183,
      },
      {
        action: "shift_code_point",
        range: [97, 122],
        add: 9275,
      },
      {
        action: "shift_code_point",
        range: [49, 57],
        add: 9283,
      },
    ],
    hasPreviewImages: true,
    textStyle: {
      path: "bubble-text",
    },
  },
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
        .split("")
        .map((char) => {
          const codePoint = char.codePointAt(0);
          if (codePoint >= action.range[0] && codePoint <= action.range[1]) {
            return String.fromCodePoint(codePoint + action.add);
          }
          return char;
        })
        .join("");
    }
  });
  return transformedText;
};

let text_demo = "Đây văn bản mẫu cho kiểu phông chữ này";

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Sẵn sàng sử dụng phông",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
};

const text = "Đây là văn bản mẫu cho kiểu phông chữ này";
const myInput = ref("");
let index = 0;
const typeCharacter = () => {
  if (index < text.length) {
    myInput.value += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 100); // Điều chỉnh tốc độ gõ phím ở đây (ms)
  }
};

watch(myInput, (newValue) => {
  updateText({ target: { value: newValue } });
});

onMounted(() => {
  typeCharacter();
});
</script>
<template>
  <div class="container p-3">
    <div class="row">
      <div data-v-4b4db9c5="" class="col-md-1"></div>
      <div class="detail-header-index col-md-10">
        <h2>
          {{ $t('welcome_1') }} <b>{{ $t('welcome_2') }}</b> {{ $t('welcome_3') }}
          <span style="font-style: italic">{{ $t('welcome_4') }}</span> {{ $t('welcome_5') }}
        </h2>
      </div>
      <div data-v-4b4db9c5="" class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <textarea
          type="text"
          :placeholder="$t('placeholder')"
          class="form-control p-2 bd-r1"
          @input="updateText"
          :v-model="myInput"
        ></textarea>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="sections row mt-3">
          <div class="col-md-6 mb-3" v-for="font in fonts" :key="font.slug">
            <div class="card bd-r1">
              <div class="card-header text-center bd-rt1">
                <RouterLink
                  :to="{ name: 'detail', params: { fname: font.slug } }"
                  style="color: unset; text-decoration: none"
                >
                  {{ $t(font.label) }}
                </RouterLink>
              </div>
              <div class="cardOn card-body ">
                <p class="card-text">
                  {{ font.transformedText }}
                </p>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <button
                      v-show="font.transformedText"
                      class="btn btn-outline-secondary"
                      @click="copyToClipboard(font.transformedText)"
                    >
                      {{ $t('Copy') }}
                    </button>
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
          <h2>{{ $t('h2_1') }}</h2>
          <p>
             {{ $t('paragrap_1') }}
          </p>
        </div>

        <div class="mb-3">
          <h2>{{ $t('h2_2') }}</h2>
          <p>
            {{ $t('paragrap_2') }}
          </p>
        </div>

        <div class="mb-3">
          <h2>{{ $t('h2_3') }}</h2>
          <p>
            {{ $t('paragrap_3') }}
          </p>
          <p>
            {{ $t('paragrap_4') }}
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
.detail-header-index {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.detail-header-index h2 {
  font-weight: 500;
}
.bd-r1 {
  border-radius: var(--rounded-box, 1rem);
}
.bd-rt1 {
  border-top-left-radius: var(--rounded-box, 1rem);
  border-top-right-radius: var(--rounded-box, 1rem);
}
h2{
    margin-bottom: 0px !important;
  }
</style>
