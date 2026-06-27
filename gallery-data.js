// ============================================================
//  GALLERY DATA FILE — this is the ONLY file you need to edit
//  when adding new work to your portfolio.
//
//  HOW TO ADD A NEW IMAGE:
//  1. Upload your image to the  images/  folder on GitHub
//  2. Copy any entry below and change:
//       file  → exact filename (must match what you uploaded)
//       title → name shown on the card
//       desc  → short description
//       tags  → list of labels (add as many as you like)
//       tab   → which gallery tab it appears in:
//                "modelling" | "texturing" | "lighting" | "films" | "concept"
//               (every item also automatically appears in "all")
//
//  EXAMPLE — adding a new sculpt:
//  { file:"MyNewSculpt.png", title:"Dragon Head", desc:"ZBrush creature sculpt", tags:["ZBrush","Creature"], tab:"modelling" },
// ============================================================

const GALLERY = [

  // ── MODELLING / SCULPTS ──────────────────────────────────
  { file:"Ivy8.png",                         title:"Ivy — Character Bust",       desc:"Organic sculpt with dragon arm & floral elements · ZBrush",          tags:["ZBrush","Organic","Character"],          tab:"modelling" },
  { file:"Ivy2.png",                         title:"Ivy — Topology",             desc:"Clean quad topology pass on face & torso",                            tags:["Retopology","ZBrush"],                   tab:"modelling" },
  { file:"Ivy4.png",                         title:"Ivy — Side Profile",         desc:"Side view showing hair sculpt & surface detail",                      tags:["Sculpting","Hair"],                      tab:"modelling" },
  { file:"Ivy5.png",                         title:"Ivy — Tattoo Detail",        desc:"Three-quarter view showing custom tattoo surface etch",               tags:["Surface Detail","ZBrush"],               tab:"modelling" },
  { file:"Lapris3.png",                      title:"Lapras — Front",             desc:"Fan-art creature sculpt · stylised anatomy",                          tags:["Creature","Stylised","ZBrush"],          tab:"modelling" },
  { file:"Lapris4.png",                      title:"Lapras — Side",              desc:"Side silhouette read & shell detail",                                  tags:["Creature","Hard Surface"],               tab:"modelling" },
  { file:"Lucifer1.png",                     title:"Lucifer — Full Character",   desc:"Stylised full-body character model · Blender/Maya",                   tags:["Character","Full Body","Stylised"],      tab:"modelling" },
  { file:"Lucifer2.png",                     title:"Lucifer — Back View",        desc:"Back silhouette & cloth detail pass",                                  tags:["Character","Cloth"],                     tab:"modelling" },
  { file:"Monster1.png",                     title:"Monster — Front",            desc:"Masked villain character · trench coat & stylised shoes",             tags:["Character","Villain","Maya"],            tab:"modelling" },
  { file:"Monster2.png",                     title:"Monster — Back View",        desc:"Back topology & coat geometry",                                        tags:["Character","Hard Surface"],              tab:"modelling" },
  { file:"Queen1.png",                       title:"Queen — Side Profile",       desc:"Elegant fantasy character · flowing dress & accessories",             tags:["Character","Fantasy","ZBrush"],          tab:"modelling" },
  { file:"Queen2.png",                       title:"Queen — Back View",          desc:"Dress silhouette & hair braid detail",                                 tags:["Character","Cloth"],                     tab:"modelling" },
  { file:"Screenshot_2025-05-21_231343.png", title:"Pirate Bird — Sculpt",       desc:"Creature sculpt · feather detailing & sword prop",                   tags:["Creature","ZBrush","Props"],             tab:"modelling" },
  { file:"Screenshot_2025-05-21_231416.png", title:"Pirate Bird — Wings",        desc:"Wing spread pose with retopo overlay",                                 tags:["Creature","Retopology"],                 tab:"modelling" },
  { file:"Screenshot_2025-05-21_231246.png", title:"Pirate Bird — Topology",     desc:"Clean wireframe over body mesh",                                       tags:["Topology","ZBrush"],                     tab:"modelling" },
  { file:"Screenshot_2025-05-21_231252.png", title:"Pirate Bird — Back Topo",   desc:"Back view wireframe & wing edge loops",                               tags:["Topology","Edge Loops"],                 tab:"modelling" },
  { file:"Screenshot_2025-05-21_231741.png", title:"Vision Mask — Retopology",  desc:"Precision retopo on complex hero mask geometry",                      tags:["Retopology","Hard Surface","Maya"],      tab:"modelling" },
  { file:"Bane2.png",                        title:"Bane — Full Body",           desc:"Hyper-muscular superhero figure · anatomy study",                     tags:["Anatomy","Character","ZBrush"],          tab:"modelling" },
  { file:"Screenshot_2025-05-21_231707.png", title:"Bane — Torso Detail",       desc:"Close-up of muscle anatomy & tactical gear",                          tags:["Anatomy","Hard Surface"],                tab:"modelling" },

  // ── TEXTURING ────────────────────────────────────────────
  // Add your texturing work here following the same pattern:
  // { file:"texture-1.jpg", title:"Skin Texture Study", desc:"Pore-level detail in Substance Painter", tags:["Substance Painter","Skin"], tab:"texturing" },

  // ── LIGHTING ─────────────────────────────────────────────
  // Add your lighting work here:
  // { file:"lighting-1.jpg", title:"HDRI Shot — Aurobindo", desc:"Hand-painted HDRI for production shot", tags:["HDRI","Studio"], tab:"lighting" },

  // ── FILMS ────────────────────────────────────────────────
  // Add film stills here:
  // { file:"anomaly-still.jpg", title:"Anomaly — Film Still", desc:"Award-winning student short film", tags:["Film","Texturing","Lighting"], tab:"films" },

  // ── CONCEPT ART ──────────────────────────────────────────
  // Add concept art & storyboards here:
  // { file:"concept-char.jpg", title:"Character Concept", desc:"Original character design sheet", tags:["Character","Design"], tab:"concept" },

];
