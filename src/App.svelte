<script>
  // Svelte Routing Library
  import { Router, Route } from "svelte-routing";

  // 828 LLC Layouts
  import Header from "./layouts/Header.svelte";
  import Main from "./layouts/Main.svelte";
  import Footer from "./layouts/Footer.svelte";

  // 828 LLC Routes
  import Index from "./routes/Index.svelte";
  import About from "./routes/About.svelte";
  import Contact from "./routes/Contact.svelte";
  import Services from "./routes/Services.svelte";
  import Education from "./routes/Education.svelte";
  import Projects from "./routes/Projects.svelte";
</script>

<head>
  <title>828 LLC</title>
</head>
<div class="flex flex-col min-h-screen">
  <Header />
  <Main>
    <Router>
      <Route path="/" component={Index} />
      <Route path="/about-us" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
    </Router>
  </Main>
  <Footer />
</div>
