import { createI18n } from "vue-i18n";

const messages = {
  en: {
    'logo_text': "Change Font",
    'welcome_1': "Cool text conversion. Write in sharp letters",
    'welcome_2': "Bold",
    'welcome_3': "stroke",
    'welcome_4': "italic",
    'welcome_5':
      "and many bold fonts different on instagram, facebook, zalo,... and everywhere else",
    'placeholder': "Edit or copy or paste text here.",
    "Bold (serif)": "Bold (serif)",
    "Italic (serif)": "Italic (serif)",
    "Bold / italic (serif)": "Bold / italic (serif)",
    "Bold (sans)": "Bold (sans)",
    "Italic (sans)": "Italic (sans)",
    "Bold / italic (sans)": "Bold / italic (sans)",
    "Italic Switch Serifs": "Italic Switch Serifs",
    "Alternating Bold": "Alternating Bold",
    "Alternating Italic": "Alternating Italic",
    "Double-struck": "Double-struck",
    'Monospace': "Monospace",
    "Sans Serif": "Sans Serif",
    "Cursive script": "Cursive script",
    "Bold cursive script": "Bold cursive script",
    "Cursive script w/ alternating bold": "Cursive script w/ alternating bold",
    'Fraktur': "Fraktur",
    "Bold fraktur": "Bold fraktur",
    'Fullwidth': "Fullwidth",
    "Vaporwave (Λ & Ξ replacement)": "Vaporwave (Λ & Ξ replacement)",
    "Vaporwave (▲ & ▼ replacement)": "Vaporwave (▲ & ▼ replacement)",
    "Vaporwave (Σ & ♢ replacement)": "Vaporwave (Σ & ♢ replacement)",
    "Bubble text": "Bubble Text",
    "Black bubble text": "Black bubble text",
    'Square': "Square",
    "Black square": "Black square",
    'Parenthesis': "Parenthesis",
    'Copy': 'Copy',
    "sample_text": "This is a sample text for this font style",
    "h2_1": 'How to Create Beautiful Text',
    'paragrap_1': 'You can create beautiful text with the Online Font Converter. You just need to write the text you want to beautify in the box above. You can use any character you want when editing text. Finally, you can click the copy icon next to the font styles to copy the font style you want.',
    "h2_2": 'What is Online Font Changer?',
    "paragrap_2": 'Online Font Changer is an online tool that allows you to write stylish texts on Instagram, Twitter, WhatsApp, Facebook, Discord, and Skype. Apart from these forums, you can also use this tool to create a stylish nickname. You can make your nickname more interesting on games such as PUBG, CS:GO and create beautiful 2024 nicknames with different font styles.',
    "h2_3": 'How does the Font Changer work?',
    "paragrap_3": 'Although the number of characters on your keyboard is limited, computers and phones can recognize tens of thousands of characters. Computers that only supported 128 characters (ASCII) in the past can now support and recognize many characters thanks to Unicode. Furthermore, every year the Unicode standard expands with more characters, symbols, and emojis, and many new characters, from national flags to various symbols, can be understood by all. computers.',
    "paragrap_4": 'Font Generator allows you to write beautiful text that can be used on forums like WhatsApp, Instagram, and many online games using symbols that are not found on the keyboard. When you do this, it will change each letter you enter with text symbols.',
    "privacy_policy": "Privacy Policy",
    "terms_of_use": "terms of use",
    "© Billion ConvertText 2024": "© Billion ConvertText 2024"
},

  vie: {
    'logo_text': "Đổi Font Chữ",
    'welcome_1': "Chuyển đổi văn bản cực ngầu. Viết chữ nét",
    'welcome_2': "Đậm",
    'welcome_3': "nét",
    'welcome_4': "nghiêng",
    'welcome_5':
      "và nhiều font chữ dặc biệt khác trên instagram, facebook, zalo,... và mọi nơi khác",
    'placeholder': "Soạn thảo hoặc sao chép, dán văn bản ở đây.",
    "Bold (serif)": "Chữ In Đậm (có chân)",
    "Italic (serif)": "Chữ In Nghiêng",
    "Bold / italic (serif)": "Chữ In Đậm/Nghiêng (có chân)",
    "Bold (sans)": "Chữ đậm (không chân)",
    "Italic (sans)": "Chữ nghiêng không chân",
    "Bold / italic (sans)": "Chữ đậm/nghiêng  (không chân)",
    "Italic Switch Serifs": "Chân chữ nghiêng chuyển đổi",
    "Alternating Bold": "In đậm xen kẽ",
    "Alternating Italic": "Chữ nghiêng xen kẽ",
    "Double-struck": "Chữ gõ đôi",
    'Monospace': "Chữ đơn rộng",
    "Sans Serif": "Có chân không chân",
    "Cursive script": "Chữ thảo",
    "Bold cursive script": "Chữ thảo đậm",
    "Cursive script w/ alternating bold": "Chữ thảo in đậm xen kẽ",
    'Fraktur': "Fraktur",
    "Bold fraktur": "Bold fraktur",
    'Fullwidth': "Chữ toàn chiều rộng",
    "Vaporwave (Λ & Ξ replacement)": "Sóng hơi (Λ & Ξ thay thế)",
    "Vaporwave (▲ & ▼ replacement)": "Sóng hơi (▲ & ▼ thay thế)",
    "Vaporwave (Σ & ♢ replacement)": "Sóng hơi (Σ & ♢ thay thế)",
    "Bubble text": "Chữ kiểu bong bóng",
    "Black bubble text": "Chữ kiểu bóng đen",
    'Square': "Chữ vuông",
    "Black square": "Chữ vuông màu đen",
    'Parenthesis': "Chữ dấu ngoặc đơn",
    'Copy': 'Sao chép',
    "sample_text": "Đây là văn bản mẫu cho kiểu phông chữ này",
    "h2_1": 'Cách tạo Văn bản Đẹp mắt',
    'paragrap_1': 'Bạn có thể tạo văn bản đẹp mắt với Công cụ Chuyển đổi Phông chữ Trực tuyến. Bạn chỉ cần viết văn bản mình muốn làm đẹp vào hộp phía trên. Bạn có thể dùng bất kỳ ký tự nào mình muốn lúc soạn thảo văn bản. Cuối cùng thì, bạn có thể nhấp vào biểu tượng sao chép kế các kiểu phông chữ để sao chép kiểu phông chữ mà mình muốn.',
    "h2_2": 'Công cụ Thay đổi Phông chữ Trực tuyến là gì?',
    "paragrap_2": 'Công cụ Thay đổi Phông chữ Trực tuyến là một công cụ trực tuyến cho phép bạn viết các văn bản sành điệu trên Instagram, Twitter, WhatsApp, Facebook, Discord, and Skype. Ngoài các diễn đàn này, bạn cũng có thể dùng công cụ này để tạo một biệt danh sành điệu. Bạn có thể làm biệt danh của mình thú vị hơn trên các game chẳng hạn như PUBG, CS: GO và tạo ra các biệt danh đẹp mắt của 2024 với các kiểu phông chữ khác nhau.',
    "h2_3": 'How does the Font Changer work?',
    "paragrap_3": 'Dù số ký tự trên bàn phím của bạn là có hạn, các máy tính và điện thoại lại có thể nhận diện được hàng chục ngàn ký tự. Các máy tính chỉ hỗ trợ 128 ký tự (ASCII) trong quá khứ bây giờ có thể hỗ trợ và nhận diện nhiều ký tự nhờ vào Unicode. Hơn nữa, hàng năm tiêu chuẩn Unicode đều mở rộng với nhiều ký tự, biểu tượng, và emoji hơn, và nhiều ký tự mới, từ lá cờ của các nước đến các biểu tượng khác nhau, đã có thể được hiểu bởi tất cả các máy tính.',
    "paragrap_4": 'Công cụ Tạo Phông chữ cho phép bạn viết văn bản đẹp mắt có thể dùng được trên các diễn đàn như WhatsApp, Instagram, và nhiều game trực tuyến bằng cách dùng các biểu tượng không có trên bàn phím. Lúc làm điều này, nó sẽ thay đổi từng chữ cái bạn nhập vào bằng các biểu tượng văn bản.',
    "privacy_policy": "Chính sách bảo mật",
    "terms_of_use": "Điều khoản sử dụng",
    "© Billion ConvertText 2024": "© Billion ConvertText 2024"

  },
};

const i18n = createI18n({
  locale: "vie",
  fallbackLocale: "en",
  messages,
});

export default i18n;
