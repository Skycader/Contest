/**
 * Сюда необходимо вставить разметку, которая будет находиться внутри тега <body>
 * ВАЖНО! тег <body> вставлять не надо, только то, что будет внутри (включая стили)
 */
const htmlFragment = `
<div class="wraper" style="width: 607px; height: 291px; margin: 16px">
    <div class="wrapper-info" style="font-weight: 400; font-size: 18px; line-height: 22px">Список товаров</div>
    <div class="cards" style="display: flex; width: 575px; height: 221px; margin: 16px">
    <div class="card" style="width: 181px; height: 221px; margin-right: 16px">
      <div
        class="img"
        style="
          width: 149px;
          height: 138px;
          background-color: #c4c4c4;
          border-radius: 16px;
          margin: 16px;
        "
      ></div>
      <div
        class="btn-keeper"
        style="text-align: center; margin: 16px; width: 149px; height: 35px"
      >
        <a class="card-title" style="font-size: 12px; line-height: 15px; font-weight: 400">Купить</a>
      </div>
    </div>
  
    <div class="card" style="width: 181px; height: 221px; margin-right: 16px">
      <div
        class="img"
        style="
          width: 149px;
          height: 138px;
          background-color: #c4c4c4;
          border-radius: 16px;
          margin: 16px;
        "
      ></div>
      <div
        class="btn-keeper"
        style="text-align: center; margin: 16px; width: 149px; height: 35px"
      >
        <a class="card-title" style="font-size: 12px; line-height: 15px; font-weight: 400">Купить</a>
      </div>
    </div>
  
    <div class="card" style="width: 181px; height: 221px; margin-right: 16px">
      <div
        class="img"
        style="
          width: 149px;
          height: 138px;
          background-color: #c4c4c4;
          border-radius: 16px;
          margin: 16px;
        "
      ></div>
      <div
        class="btn-keeper"
        style="text-align: center; margin: 16px; width: 149px; height: 35px"
      >
        <a class="card-title" style="font-size: 12px; line-height: 15px; font-weight: 400">Купить</a>
      </div>
    </div>
  </div>
`;

module.exports = function () {
    return htmlFragment;
};
