<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

const fonts = ref();
const titleFont = ref("");
const detailOne = ref("");
const detailTw = ref("");
const detailTh = ref("");

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

const route = useRoute();
const nameFont = route.params.fname;
const boldData = ref(null);
const doubleData = ref(null);
const SansSerifData = ref(null);
const CursiveScript = ref(null);
onMounted(async () => {
  if (
    nameFont === "bold" ||
    nameFont === "italic" ||
    nameFont === "bold-italic" ||
    nameFont === "bold-sans" ||
    nameFont === "italic-sans" ||
    nameFont === "bold-italic-sans" ||
    nameFont === "bold-alternating-italic" ||
    nameFont === "italic-switch-serifs" ||
    nameFont === "alternating-bold" ||
    nameFont === "alternating-italic"
  ) {
    try {
      const module = await import("@/assets/fonts/bold.js");
      boldData.value = module.default;
      fonts.value = boldData.value.font;

      if (nameFont === "bold") {
        titleFont.value = "Bold (serif)";
      } else if (nameFont === "italic") {
        titleFont.value = "Italic (serif)";
      } else if (nameFont === "bold-italic") {
        titleFont.value = "Bold / italic (serif)";
      } else if (nameFont === "bold-sans") {
        titleFont.value = "Bold (sans)";
      } else if (nameFont === "italic-sans") {
        titleFont.value = "Italic (sans)";
      } else if (nameFont === "bold-italic-sans") {
        titleFont.value = "Bold / italic (sans)";
      } else if (nameFont === "bold-alternating-italic") {
        titleFont.value = "Bold w/ Alternating Italic";
      } else if (nameFont === "italic-switch-serifs") {
        titleFont.value = "Italic Switch Serifs";
      } else if (nameFont === "alternating-bold") {
        titleFont.value = "Alternating Bold";
      } else if (nameFont === "alternating-italic") {
        titleFont.value = "Alternating Italic";
      }

      detailOne.value = boldData.value.detailOne;
      detailTw.value = boldData.value.detailTw;
      detailTh.value = boldData.value.detailThree;
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  } else if (nameFont === "double-struck") {
    try {
      const module = await import("@/assets/fonts/double.js");
      doubleData.value = module.default;
      fonts.value = doubleData.value.font;
      titleFont.value = doubleData.value.nameFont;
      detailOne.value = doubleData.value.detailOne;
      detailTw.value = doubleData.value.detailTw;
      detailTh.value = doubleData.value.detailThree;
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  } else if (nameFont === "sans-serif") {
    try {
      const module = await import("@/assets/fonts/sans-serif.js");
      SansSerifData.value = module.default;
      fonts.value = SansSerifData.value.font;
      titleFont.value = SansSerifData.value.nameFont;
      detailOne.value = SansSerifData.value.detailOne;
      detailTw.value = SansSerifData.value.detailTw;
      detailTh.value = SansSerifData.value.detailThree;
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }

  else if (nameFont === "bold-script") {
    try {
      const module = await import("@/assets/fonts/cursive-script.js");
      CursiveScript.value = module.default;
      fonts.value = CursiveScript.value.font;
      titleFont.value = CursiveScript.value.nameFont;
      detailOne.value = CursiveScript.value.detailOne;
      detailTw.value = CursiveScript.value.detailTw;
      detailTh.value = CursiveScript.value.detailThree;
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }
});
</script>

<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-8">
            <div class="font-title">
              <h2>{{ titleFont }}</h2>
            </div>
            <p>
              {{ detailOne }}
            </p>
            <p>
              {{ detailTw }}
            </p>
          </div>
          <div class="col-md-4">
            <img
              class="w-100"
              src="https://yaytext.com/static/a6cf60d75833b3f353324f8ea3f45dbe/416c3/main-bold-italic.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>

  <div class="container p-3">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <input
          type="text"
          placeholder="Soạn thảo hoặc sao chép, dán văn bản ở đây."
          class="form-control p-2"
          @input="updateText"
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
                {{ font.label }}
              </div>
              <div class="card-body">
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
                      Sao chép
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
    <div class="row mt-3">
      <div class="col-md-1"></div>
      <div class="col-md-10 content-wel">
        <div class="mb-3">
          <p>
            {{ detailTh }}
          </p>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row mt-3">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <h2>Xem trước</h2>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>

          <div class="col-md-3 mb-3">
            <img
              src="https://yaytext.com/static/591fac477b447ab4e02a47100d6b34de/a49d0/android-message-sms-bold-italic-1390.webp"
              class="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<style>
.font-title h1 {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.3333333;
  margin-bottom: 1em;
}

h2 {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.3333333;
  margin-bottom: 1em;
}
</style>
