import { infer, z } from "zod";

export const createAdSchema = z.object({
	title: z
		.string()
		.min(1, { message: "Veuillez saisir un titre" })
		.max(200, { message: "Le titre ne peut pas dépasser 200 caractères" }),
	description: z
		.string()
		.min(1, { message: "Veuillez saisir une description" }),
	owner: z.string().min(1, { message: "Le nom du propriétaire est requis" }),
	price: z
		.number()
		.positive({ message: "Le prix doit être un nombre positif" }),
	pictureUrl: z.string().optional(),
	location: z.string().min(1, { message: "La localisation est requise" }),
	category: z
		.number()
		.int()
		.positive({ message: "L'ID de la catégorie doit être un entier positif" }),
	tags: z.array(z.number().int()).default([]),
});

export type NewAdData = z.infer<typeof createAdSchema>;

export const updateAdSchema = z.object({
	title: z
		.string()
		.min(1, { message: "Veuillez saisir un titre" })
		.max(200, { message: "Le titre ne peut pas dépasser 200 caractères" }),
	description: z
		.string()
		.min(1, { message: "Veuillez saisir une description" }),
	price: z
		.number()
		.positive({ message: "Le prix doit être un nombre positif" }),
	pictureUrl: z.string().optional(),
	category: z
		.number()
		.int()
		.positive({ message: "L'ID de la catégorie doit être un entier positif" }),
	tags: z.array(z.number().int()).default([]),
});

export type UpdatedAdData = z.infer<typeof updateAdSchema>;
