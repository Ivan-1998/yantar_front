<template>
  <div class="sidebar box-shadow">
    <div class="sidebar-logo">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>

    <ul class="sidebar-links">
      <li v-for="(link, index) in links"
          :key="index"
          class="sidebar-links__link"
          @click.self="linkHandlerClick(index)"
      >
        {{link.title}}
        <span @click.self="toggleSublinksShow(index)" class="chevron" :class="{'chevron-top': link.isSublinksShow}"></span>  

        <ul v-if="link.sublinks.length && link.isSublinksShow">
          <router-link v-for="(sublink, sublinkIndex) in link.sublinks"
                       :to="{ name: sublink.toName }"
                       :key="sublinkIndex"
                       class="sidebar-links__sublink"
          >
            {{sublink.title}}
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  watch: {
    '$route.name'() {
      this.defineCurrentRoute();
    }
  },
  mounted() {
    this.defineCurrentRoute();
  },
  data() {
    return {
      links: [
        {
          title: 'Продукция',
          isSublinksShow: false,
          sublinks: [
            {
              title: 'Список товаров',
              toName: 'productsList'
            },
            {
              title: 'Добавить товар',
              toName: 'productsAdd'
            }
          ]
        },
        {
          title: 'Новости',
          toName: 'products',
          isSublinksShow: false,
          sublinks: [
            {
              title: 'Все новости',
              toName: 'newsList'
            },
            {
              title: 'Добавить новость',
              toName: 'newsAdd'
            }
          ]
        }
      ]
    };
  },
  methods: {
    linkHandlerClick(index) {
      const link = this.links[index];

      if (link.sublinks.length) {
        return this.toggleSublinksShow(index);
      }

      this.$router.push({ name: link.toName });
    },
    toggleSublinksShow(index) {
      this.links[index].isSublinksShow = !this.links[index].isSublinksShow;
    },

    defineCurrentRoute() {
      const routeName = this.$route.name;

      this.links.forEach((link, linkIndex) => {
        if (link.sublinks.length) {
          const linkActive = link.sublinks.find(sublink => sublink.toName === routeName);
          if (linkActive) {
            this.links[linkIndex].isSublinksShow = true;
          } else {
            this.links[linkIndex].isSublinksShow = false;
          }
        }
      })
    }
  }
}
</script>