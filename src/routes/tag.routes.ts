import { Router } from 'express';
import {
  getTags,
  createTag,
  getTag,
  updateTag,
  deleteTag,
} from '../controllers/tag.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Operations related to tags
 */

router.get('/', getTags);

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Create a new tag
 *     description: Create a new tag with the provided data
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully created the tag
 *       400:
 *         description: Invalid request body
 */
router.post('/', createTag);

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Get a tag by ID
 *     description: Retrieve a single tag by its ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the tag to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested tag
 *       404:
 *         description: Tag not found
 */
router.get('/:id', getTag);

/**
 * @swagger
 * /tags/{id}:
 *   put:
 *     summary: Update a tag by ID
 *     description: Update a single tag by its ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the tag to update
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
 *     responses:
 *       200:
 *         description: Successfully updated the tag
 *       404:
 *         description: Tag not found
 *       400:
 *         description: Invalid request body
 */
router.put('/:id', updateTag);

/**
 * @swagger
 * /tags/{id}:
 *   delete:
 *     summary: Delete a tag by ID
 *     description: Delete a single tag by its ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the tag to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted the tag
 *       404:
 *         description: Tag not found
 */
router.delete('/:id', deleteTag);

export default router;
