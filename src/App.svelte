<script>
  // Svelte Routing Library
  import { Router, Route } from "svelte-routing";

  // 828 LLC Layouts
  import Header from "./layouts/Header.svelte";
  import Main from "./layouts/Main.svelte";
  import Footer from "./layouts/Footer.svelte";

  // 828 LLC Routes
  import Index from "./routes/Index.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <Main>
    <Router>
      <Route path="/" component={Index} />
    </Router>
  </Main>
  <Footer />
</div>
