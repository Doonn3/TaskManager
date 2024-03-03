<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <section class="hero">
      <h1>О май гад это Simple Task Manager</h1>
    </section>

    <section class="reviews">
      <h2 class="reviews__title">Отзывы</h2>
      <div class="item">
        <p class="item__user-name">Стетхам</p>
        <p class="item__text">
          Невероятный simple task manager всем рекомендую. Очень простой, однокнопочный, очень легко
          разобраться и приступить сразу к работе. Не то что другие task managers, очень сложные с
          100500 кнопками.
        </p>
      </div>
      <div class="item">
        <p class="item__user-name">Джон Снежинка</p>
        <P class="item__text"
          >О мои боги, это лучшее, что я видел. Не представляю, как я жил без этого. Можно даже
          указать время, когда задача должна быть решена, и самому потом следить за этим временем.
          Не то что в других - там оповещения какие-то непонятные. А этот task manager еще вас
          обучает быть чутким и невероятно продуктивным. Очень надеюсь, что разработчик сделает
          версии под киборга и под MacOS. Ставлю 10 баллов, так держать!</P
        >
      </div>
      <div class="item">
        <p class="item__user-name">Власов Джедай</p>
        <P class="item__text"
          >Я пользовался другими таск-менеджерами и никогда не был продуктивным, всегда все было
          плохо. Но тут друзья посоветовали Simple Task Manager. Я вначале скептически отнесся, но
          когда попробовал, я стал сразу неожиданно продуктивным и у меня все стало получаться. Я
          даже купил хлеб вовремя, я невероятно этому удивился. И я решил еще попробовать: я создал
          задачу сходить за молоком и поставил дедлайн - неделю. И я просто офигел - я выполнил
          задачу в срок и даже больше, я купил с молоком шоколадку "Альбатрос". Невероятное
          приложение, у меня даже сейчас руки трясутся. Жду эту божественность на платформе VR</P
        >
      </div>
      <div class="item">
        <p class="item__user-name">Габен Нювал</p>
        <P class="item__text"
          >Офигеть, вот что не хватало моей команде! Скажите спасибо Simple Task Manager. Если бы не
          он, то в свет никогда бы не вышла игра Hulf-Life Alexandra</P
        >
      </div>
    </section>

    <RouterLink class="btn-link" to="/tasks">Немедленно приступить к работе</RouterLink>
  </main>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding: 50px;

  font-size: 30px;
  color: white;
  background-color: rgb(103, 156, 103);
}

.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  background-color: rgb(58, 58, 58);

  &__title {
    font-size: 28px;
    color: white;
  }
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;
  padding: 10px;

  border: 1px solid white;

  color: white;

  &__user-name {
    font-size: 24px;
  }

  &__text {
    font-size: 18px;
  }
}

.btn-link {
  display: block;
  width: 100%;

  margin-top: 10px;
  padding: 10px;

  background-color: rgb(87, 125, 139);

  font-size: 20px;
  text-align: center;
  color: white;
}
</style>
