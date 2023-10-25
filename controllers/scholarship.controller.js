const ScholarshipService = require('../service/scholarship.service');

class ScholarshipController {
    async getAllScholarships(req, res) {
        try {
            const page = req.query.page || 1;
            const perPage = req.query.perPage || 10;
            const filters = {
                title: req.query.title,
                fundingType: req.query.fundingType,
                educationalLevel: req.query.educationalLevel,
                country: req.query.country,
                sort: req.query.sort,
            };

            const scholarships = await ScholarshipService.getAllScholarships( page, perPage, filters );

            return res.status(200).json({
                data: scholarships.scholarships,
                pagination: {
                    currentPage: scholarships.page,
                    totalPages: scholarships.totalPages,
                },
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getScholarshipBySlug(req, res) {
        const { slug } = req.params;
        try {
            const scholarship = await ScholarshipService.getScholarshipBySlug(slug);
            if (!scholarship) {
                return res.status(404).json({ error: 'Scholarship not found' });
            }
            res.json(scholarship);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createScholarship(req, res) {
        const scholarshipData = req.body;
        try {
            const scholarship = await ScholarshipService.createScholarship(scholarshipData);
            res.status(201).json(scholarship);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateScholarship(req, res) {
        const { id } = req.params;
        const scholarshipData = req.body;
        try {
            const scholarship = await ScholarshipService.updateScholarship(id, scholarshipData);
            if (!scholarship) {
                return res.status(404).json({ error: 'Scholarship not found' });
            }
            res.json(scholarship);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteScholarship(req, res) {
        const { id } = req.params;
        try {
            const scholarship = await ScholarshipService.deleteScholarship(id);
            if (!scholarship) {
                return res.status(404).json({ error: 'Scholarship not found' });
            }
            res.json({ message: 'Scholarship deleted' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new ScholarshipController();
