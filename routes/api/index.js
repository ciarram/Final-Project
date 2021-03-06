const router = require("express").Router();
const authRoutes = require("./auth");
const projectsRoutes = require("./projects");

// Auth routes
router.use("/api/auth", authRoutes);
// Book routes
router.use("/api/projects", projectsRoutes);

module.exports = router;
