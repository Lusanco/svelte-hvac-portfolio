<script>
  // Svelte Routing Library
  import { Router, Route } from "svelte-routing";

  // 828 LLC Articles
  import articles from "./scripts/articlesContent";

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
  import Article from "./routes/Article.svelte";
</script>

<!-- Head Tag Imports -->
<head>
  <!-- Font Awesome -->
  <script
    src="https://kit.fontawesome.com/48f2b60ee4.js"
    crossorigin="anonymous"
  ></script>

  <link rel="stylesheet" href="src/styles/styles.css" />
  <meta
    name="desription"
    content="828 LLC is a leading mechanical installation company specializing in HVAC systems. We offer comprehensive engineering services, project execution, and extensive expertise in various air conditioning and ventilation equipment. Committed to exceptional customer service, ethics, and integrity, we provide reliable solutions tailored to meet your specific needs."
  />
</head>

<!-- Layouts, Router and Routes -->
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
      {#each articles as article}
        <Route path={article.blogArticle}>
          <Article
            blogTitle={article.blogTitle}
            authorName={article.authorName}
            authorTitle={article.authorTitle}
            blogSource={article.blogSource}
            blogSourceName={article.blogSourceName}
            blogContent={article.blogContent}
            blogDate={article.blogDate}
          />
        </Route>
      {/each}
    </Router>
  </Main>
  <Footer />
</div>
