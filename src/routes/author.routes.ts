import { Router } from 'express';
import {
  getAuthors,
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from '../controllers/author.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Operations related to authors
 */

router.get('/', getAuthors);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create a new author
 *     description: Create a new author with the provided data
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully created the author
 *       400:
 *         description: Invalid request body
 */
router.post('/', createAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get an author by ID
 *     description: Retrieve a single author by its ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the author to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested author
 *       404:
 *         description: Author not found
 */
router.get('/:id', getAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Update an author by ID
 *     description: Update a single author by its ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the author to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the author
 *       404:
 *         description: Author not found
 *       400:
 *         description: Invalid request body
 */
router.put('/:id', updateAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author by ID
 *     description: Delete a single author by its ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the author to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted the author
 *       404:
 *         description: Author not found
 */
router.delete('/:id', deleteAuthor);

export default router;
