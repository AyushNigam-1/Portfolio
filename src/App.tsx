import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;


{/* <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a2d4f,100:3b82f6&height=130&section=header&animation=fadeIn" width="100%"/>

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=22&pause=1000&color=3B82F6&center=true&vCenter=true&width=600&height=60&lines=Hey%2C+I'm+Ayush+Nigam+%F0%9F%91%8B;Full-Stack+Engineer+%7C+AI+Systems;Self-taught.+Ship-first.+No+shortcuts.)](https://git.io/typing-svg)

<br/>

[![Portfolio](https://img.shields.io/badge/◈%20Portfolio-Online-3b82f6?style=flat-square)](https://your-portfolio-link.com)&nbsp;
[![Email](https://img.shields.io/badge/Email-hello%40ayushnigam.dev-3b82f6?style=flat-square&logo=gmail&logoColor=white)](mailto:hello@ayushnigam.dev)&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-3b82f6?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/ayush-nigam)&nbsp;
[![Twitter](https://img.shields.io/badge/Twitter-%40ayushnigam__dev-3b82f6?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/ayushnigam_dev)&nbsp;
[![Views](https://komarev.com/ghpvc/?username=AyushNigam-1&color=3b82f6&style=flat-square&label=Profile+Views)](https://github.com/AyushNigam-1)

</div>

---

  ```ts
const ayush = {
  role      : "Full-Stack Engineer & AI Systems Architect",
  location  : "Kanpur, IN  ·  UTC+5:30",
  status    : "⬤ Open to Work",
  building  : ["AI Agents", "RAG Systems", "Real-time Collaborative Apps"],
  philosophy: "Certificates don't scale. Optimized systems do.",
};
```
## ⚡ Technical Arsenal

  < table width = "100%" >
  <tr>
    <td width="50%" valign="top">
<br/>

&nbsp;&nbsp;**🖥️ Frontend & UI**

&nbsp;&nbsp;`Next.js` `React 19` `TypeScript` `Vue.js` `Tailwind CSS` `Framer Motion` `Shadcn UI` `Apollo Client` `Virtua` `Vite`

<br/>
</td>
    <td width="50%" valign="top">
<br/>

&nbsp;&nbsp;**⚙️ Backend & Systems**

&nbsp;&nbsp;`Python` `FastAPI` `Node.js` `Django` `GraphQL` `WebSockets` `Better Auth` `Rust (Solana Escrow)` `REST APIs`

<br/>
</td>
  </tr>
  <tr>
    <td width="50%" valign="top">
<br/>

&nbsp;&nbsp;**🧠 AI / ML & Data**

&nbsp;&nbsp;`LangChain` `LangGraph` `Groq` `Gemini` `RAG Pipelines` `MCP` `Vector Embeddings` `Pinecone` `n8n`

<br/>
</td>
    <td width="50%" valign="top">
<br/>

&nbsp;&nbsp;**🏗️ Infrastructure**

&nbsp;&nbsp;`MongoDB` `PostgreSQL` `Redis` `Docker` `GitHub Actions` `Nginx` `Microservices` `Solana` `Smart Contracts`

<br/>
</td>
  </tr>
</table >

  ---

## 🔭 Active Systems

  < details open >
<summary><b>🧠 &nbsp;<a href="https://github.com/AyushNigam-1/Briefly.AI">Briefly.AI</a> &nbsp;—&nbsp; Memory-Driven AI Workspace & Autonomous Agent</b></summary>
<br/>

`Next.js` & nbsp; `FastAPI` & nbsp; `Groq` & nbsp; `n8n` & nbsp; `Redis` & nbsp; `MongoDB`

  > Custom n8n automation interceptor for zero - hallucination background task generation.Virtualized infinite chat scrolling with strict composite keys to eliminate DOM layout shifts during live LLM streaming.

</details >

  ---

  <details open>
    <summary><b>📝 &nbsp;<a href="https://github.com/AyushNigam-1/Skrible">Skrible</a> &nbsp;—&nbsp; Collaborative Role-Based Drafting Platform</b></summary>
    <br />

    `React` &nbsp; `TypeScript` &nbsp; `Apollo GraphQL` &nbsp; `Node.js` &nbsp; `Redis`

> Viewer-aware Redis caching to prevent data leaks on private drafts. Optimistic Apollo Client mutations with Framer Motion for layout-shift-free interactions under complex state changes.

  </details>

---

  <details open>
    <summary><b>📚 &nbsp;<a href="https://github.com/AyushNigam-1/Bewise">Bewise</a> &nbsp;—&nbsp; Intelligent Knowledge Synthesis Platform</b></summary>
    <br />

    `Next.js 14` &nbsp; `FastAPI` &nbsp; `PostgreSQL` &nbsp; `Pinecone` &nbsp; `Redis` &nbsp; `React Query`

> Custom Hybrid RAG engine with granular book-level context grounding. AbortController for real-time stream cancellation to cut LLM token waste. Redis-layered caching across SQL and vector queries.

  </details>

---

## 📊 Deployment Telemetry

  < div align = "center" >

<img src="https://github-readme-activity-graph.vercel.app/graph?username=AyushNigam-1&bg_color=0d1117&color=3b82f6&line=3b82f6&point=ffffff&area=true&area_color=1a2d4f&hide_border=true&hide_title=true" width="100%" alt="Activity Graph"/>

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <img src="https://github-readme-stats-fast.vercel.app/api?username=AyushNigam-1&show_icons=true&hide_border=true&bg_color=0d1117&text_color=94a3b8&icon_color=3b82f6&title_color=3b82f6&include_all_commits=true&rank_icon=github" width="100%" alt="GitHub Stats"/>
    </td>
    <td width="50%" align="center">
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=AyushNigam-1&hide_border=true&background=0d1117&ring=3b82f6&fire=60a5fa&currStreakNum=ffffff&currStreakLabel=3b82f6&sideNums=94a3b8&sideLabels=94a3b8&dates=52525b" width="100%" alt="Streak Stats"/>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=AyushNigam-1&hide_border=true&bg_color=0d1117&text_color=94a3b8&title_color=3b82f6&hide=jupyter%20notebook,html,solidity&langs_count=6&layout=compact" width="100%" alt="Top Languages"/>
    </td>
    <td width="50%" align="center">
      <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=AyushNigam-1&theme=github_dark&utcOffset=5.5" width="100%" alt="Productive Time"/>
    </td>
  </tr>
</table>

</div >

  ---

## 🌐 Contribution Grid

  < div align = "center" >
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/AyushNigam-1/AyushNigam-1/output/github-contribution-grid-snake-dark.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/AyushNigam-1/AyushNigam-1/output/github-contribution-grid-snake.svg">
          <img alt="contribution snake" src="https://raw.githubusercontent.com/AyushNigam-1/AyushNigam-1/output/github-contribution-grid-snake.svg" width="100%">
          </picture>
        </div>

        ---

        <div align="center">

          ```
          ayush@portfolio:~ $ systemctl start engineering_protocol && echo "shipped." && exit
          ```

        </div>

        <img src="https://capsule-render.vercel.app/api?type=waving&color=0:3b82f6,50:1a2d4f,100:0d1117&height=100&section=footer&animation=fadeIn" width="100%" /> 
        */}