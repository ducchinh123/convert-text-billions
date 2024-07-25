import URL from "@/const";

const double = {
  nameFont: "Double struck",
  detailOne:
    "Phép thuật văn bản unicode cực hay. Sử dụng các từ 𝕠𝕦𝕥𝕝𝕚𝕟𝕖𝕕 được đánh hai lần (còn gọi là in đậm trên bảng đen) trên Facebook, Twitter, v.v.",
  detailTw:
    'Trình tạo văn bản được phác thảo của chúng tôi có thể giúp từ ngữ của bạn nổi bật. Phong cách "bảng đen đậm" có nguồn gốc là một phương pháp tạo ra một phong cách trông đậm nét khi vẽ trên bảng đen (𝕝𝕚𝕜𝕖 𝕥𝕙𝕚𝕤). Vì những kiểu này được tạo bằng Unicode nên bạn có thể dán văn bản vào Facebook hoặc Twitter để làm cho bài đăng của bạn trông giống như đang sử dụng phông chữ bóng mờ hoặc phông chữ nội tuyến.',
  detailThree: `
  Double-struck còn được gọi là "bảng đen in đậm" vì kiểu dáng này bắt nguồn từ việc các nhà toán học sử dụng cạnh của một viên phấn khi viết để tạo ra các chữ in đậm trên bảng đen. Theo thời gian, kiểu chữ trở nên khác biệt so với kiểu in đậm và chuyển từ bảng đen sang dạng đánh máy và kỹ thuật số. Các nhà toán học sử dụng phong cách này để biểu diễn các tập hợp và các loại biến khác. Trên mạng xã hội, văn bản có phông chữ phác thảo thường được sử dụng để tạo tác động trực quan và thu hút sự chú ý. Nó cung cấp độ tương phản với nền và trông rất độc đáo. Ngoài ra, các phông chữ có đường viền như nét kép có thể tạo thêm nét trang trí tinh tế.
  `,
  font: [
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
    },

    {
      label: "Weird Double-Struck",
      slug: "weird-double-struck",
      previewFont: "times",
      actions: [
        {
          action: "map_code_point",
          map: "wdblup",
        },
        {
          action: "map_code_point",
          map: "wdbllo",
        },
      ],
    },

    {
      "label": "Alternating Weirdness Double-Struck ",
      "slug": "alternating-weird-double-struck",
      "previewFont": "times",
      "actions": [
          {
              "action": "cycle",
              "actions": [
                  [
                      {
                          "action": "normalize",
                          "type": "NFD"
                      },
                      {
                          "action": "map_code_point",
                          "map": {
                              "67": [
                                  8450
                              ],
                              "72": [
                                  8461
                              ],
                              "78": [
                                  8469
                              ],
                              "80": [
                                  8473
                              ],
                              "81": [
                                  8474
                              ],
                              "82": [
                                  8477
                              ],
                              "90": [
                                  8484
                              ]
                          }
                      },
                      {
                          "action": "shift_code_point",
                          "range": [
                              65,
                              90
                          ],
                          "add": 120055
                      },
                      {
                          "action": "shift_code_point",
                          "range": [
                              97,
                              122
                          ],
                          "add": 120049
                      },
                      {
                          "action": "shift_code_point",
                          "range": [
                              48,
                              57
                          ],
                          "add": 120744
                      }
                  ],
                  [
                      {
                          "action": "map_code_point",
                          "map": "wdblup"
                      },
                      {
                          "action": "map_code_point",
                          "map": "wdbllo"
                      }
                  ]
              ]
          }
      ]
    }
  ],
  avatar: URL.BASE_URL+"/public/assets/images/double/avatar.png",
  previewImages: [
      URL.BASE_URL+"/assets/images/double/pre1.png",
      URL.BASE_URL+"/assets/images/double/pre2.png",
      URL.BASE_URL+"/assets/images/double/pre3.png",
  ],
};

export default double;
