const express = require("express");
const router = express.Router();
const Figuritas = require("../models/figuritas");

// crud
  // read
exports.read = async (req, res) => {
  try {
    const list = await Figuritas.getAll();
    res.json(list);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la lista de las figuritas." });
  }
};

  // update
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { la_tengo, cantidad } = req.body;
    let figurita = {};
    if (la_tengo) {
      figurita = {...figurita, la_tengo};
    } else {
      figurita = {...figurita, la_tengo, cantidad:0};
    }
    if (cantidad) {
      figurita = {...figurita, cantidad};
    }
    await Figuritas.update(id, figurita);
    res.send('El registro ha sido actualizado con éxito.');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar.' });
  }
};

// reportes
  // figuritas que faltan
exports.getMissedFigs = async (req, res) => {
  try {
    const lista = await Figuritas.getMissed();
    res.json(lista);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la lista de las figuritas que faltan." });
  }
};

  // figuritas repetidas
exports.getRepetedFigs = async (req, res) => {
  try {
    const lista = await Figuritas.getRepeted();
    res.json(lista);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener la lista de las figuritas repetidas." });
  }
};

