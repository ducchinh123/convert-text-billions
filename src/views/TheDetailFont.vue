<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
import varpowave from "@/assets/fonts/varpowave.js";

const fonts = ref();
const titleFont = ref("");
const detailOne = ref("");
const detailTw = ref("");
const detailTh = ref("");
const avatar = ref("")
const previews = ref([])
const domain = ref("") 

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
// let text_demo = "Đây văn bản mẫu cho kiểu phông chữ này";

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
const Fraktur = ref(null)
const Monospace = ref(null)
const Vaporwave = ref(null)
const Bubble = ref(null)
const Square = ref(null)
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
      avatar.value = boldData.value.avatar
      previews.value = boldData.value.previewImages
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
      avatar.value = doubleData.value.avatar
      previews.value = doubleData.value.previewImages
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
      avatar.value = SansSerifData.value.avatar
      previews.value = SansSerifData.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }

  else if (nameFont === "script" || nameFont === "alt-cursive" || nameFont === "bold-script" ) {
    try {
      const module = await import("@/assets/fonts/cursive-script.js");
      CursiveScript.value = module.default;
      fonts.value = CursiveScript.value.font;
    
      if(nameFont === "script") {
        titleFont.value = "Cursive script";
      }else if(nameFont === "alt-cursive") {
        titleFont.value = "Cursive script w/ alternating bold";
      }else {
        titleFont.value = "Bold cursive script"
      }
      detailOne.value = CursiveScript.value.detailOne;
      detailTw.value = CursiveScript.value.detailTw;
      detailTh.value = CursiveScript.value.detailThree;
      avatar.value = CursiveScript.value.avatar
      previews.value = CursiveScript.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }
  else if (nameFont === "fraktur" || nameFont === "bold-fraktur") {
    try {
      const module = await import("@/assets/fonts/fraktur.js");
      Fraktur.value = module.default;
      fonts.value = Fraktur.value.font;
    
      if(nameFont === "fraktur") {
        titleFont.value = "Fraktur";
      }else {
        titleFont.value = "Bold Fraktur"
      }
      detailOne.value = Fraktur.value.detailOne;
      detailTw.value = Fraktur.value.detailTw;
      detailTh.value = Fraktur.value.detailThree;
      avatar.value = Fraktur.value.avatar
      previews.value = Fraktur.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }

  else if (nameFont === "monospace") {
    try {
      const module = await import("@/assets/fonts/monospace.js");
      Monospace.value = module.default;
      fonts.value = Monospace.value.font;
      titleFont.value = Monospace.value.nameFont
      detailOne.value = Monospace.value.detailOne;
      detailTw.value = Monospace.value.detailTw;
      detailTh.value = Monospace.value.detailThree;
      avatar.value = Monospace.value.avatar
      previews.value = Monospace.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }
  else if (nameFont === "vaporwave-ae" || nameFont === 'vaporwave-av' || nameFont === 'vaporwave-eo' || nameFont === 'fullwidth') {
    try {
      const module = await import("@/assets/fonts/varpowave.js");
      Vaporwave.value = module.default;
      fonts.value = Vaporwave.value.font;
      if(nameFont === "vaporwave-ae") {
        titleFont.value = 'Vaporwave (Λ & Ξ replacement)'
      }else if(nameFont === 'vaporwave-eo') {
        titleFont.value = "Vaporwave (Σ & ♢ replacement)"
      }else if(nameFont === 'vaporwave-av') {
        titleFont.value = 'Vaporwave (▲ & ▼ replacement)'
      }else {
        titleFont.value = 'Fullwidth'
      }
      detailOne.value = Vaporwave.value.detailOne;
      detailTw.value = Vaporwave.value.detailTw;
      detailTh.value = Vaporwave.value.detailThree;
  avatar.value = Vaporwave.value.avatar
      previews.value = Vaporwave.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }
  else if (nameFont === "bubble" || nameFont === 'black-bubble' || nameFont === 'parenthesis') {
    try {
      const module = await import("@/assets/fonts/black-bubble.js");
      Bubble.value = module.default;
      fonts.value = Bubble.value.font;
      if(nameFont === "bubble") {
        titleFont.value = 'Bubble'

      }else if(nameFont === 'parenthesis') {
        titleFont.value = 'parenthesis'
      }
      else {
        titleFont.value = "Black Bubble"
      }
      detailOne.value = Bubble.value.detailOne;
      detailTw.value = Bubble.value.detailTw;
      detailTh.value = Bubble.value.detailThree;
      avatar.value = Bubble.value.avatar
      previews.value = Bubble.value.previewImages
    } catch (error) {
      console.error("Error loading bold module:", error);
    }
  }

  else if (nameFont === "black-square" || nameFont === 'square') {
    try {
      const module = await import("@/assets/fonts/square.js");
      Square.value = module.default;
      fonts.value = Square.value.font;
      if(nameFont === "black-square") {
        titleFont.value = 'Black Square'
      }
      else {
        titleFont.value = "Square"
      }
      detailOne.value = Square.value.detailOne;
      detailTw.value = Square.value.detailTw;
      detailTh.value = Square.value.detailThree;
      avatar.value = Square.value.avatar
      previews.value = Square.value.previewImages
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
              :src="avatar"
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
        <textarea
          type="text"
          placeholder="Soạn thảo hoặc sao chép, dán văn bản ở đây."
          class="form-control p-2 bd-r1"
          @input="updateText"
        ></textarea>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="row mt-3">
          <div class="col-md-6 mb-3" v-for="font in fonts" :key="font.slug">
            <div class="card bd-r1">
              <div class="card-header text-center bd-rt1">
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
          <div class="col-md-4 mb-3" v-for="(preview, index) in previews" :key="index">
            <img style="object-fit: contain;"
              :src="preview"
              class="w-100 h-100 img-thumbnail"
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
.bd-r1{
  border-radius: var(--rounded-box, 1rem);
}
.bd-rt1{
  border-top-left-radius: var(--rounded-box, 1rem);
  border-top-right-radius: var(--rounded-box, 1rem);
}
</style>
