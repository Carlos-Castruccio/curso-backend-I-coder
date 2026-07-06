import express from "express";
import Producto from "../models/Producto.js";

const router = express.Router();

// ==========================
// LISTAR + FILTROS
// ==========================
router.get("/", async (req, res) => {
  const { categoria, nombre, garantia, activo } = req.query;

  const filtro = {};

  // Categoría
  if (categoria) {
    filtro.categoria = categoria;
  }

  // Regex
  if (nombre) {
    filtro.nombre = {
      $regex: nombre,
      $options: "i",
    };
  }

  // Exists
  if (garantia) {
    filtro.garantia = { $exists: true };
  }

  // Boolean
  if (activo) {
    filtro.activo = true;
  }

  const productos = await Producto.find(filtro);

  res.render("productos", {
    productos,
    categoriaActual: categoria || "",
    nombreActual: nombre || "",
    garantiaActual: garantia || "",
    activoActual: activo || "",
    error: req.query.error ? "Datos inválidos." : null,
  });
});

// ==========================
// CREAR
// ==========================
router.post("/crear", async (req, res) => {
  try {

    const datos = {
      ...req.body,

      precio: Number(req.body.precio),
      stock: Number(req.body.stock),

      garantia: req.body.garantia
        ? Number(req.body.garantia)
        : undefined,

      tags: req.body.tags
        ? req.body.tags.split(",").map(tag => tag.trim())
        : []
    };

    const producto = new Producto(datos);

    await producto.save();

    return res.redirect("/productos");

  } catch (error) {

    console.log(error.message);

    return res.redirect("/productos?error=1");
  }
});

// ==========================
// ELIMINAR
// ==========================
router.post("/eliminar/:id", async (req, res) => {

  await Producto.deleteOne({
    _id: req.params.id,
  });

  res.redirect("/productos");

});

export default router;