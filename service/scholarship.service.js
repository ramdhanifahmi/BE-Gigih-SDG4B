const ScholarshipRepository = require('../repository/scholarship.repository');

class ScholarshipService {
    async getAllScholarships(page, perPage, filters) {
        return ScholarshipRepository.getAll(page, perPage, filters);
    }

    async getScholarshipById(id) {
        return ScholarshipRepository.findById(id);
    }

    async getScholarshipBySlug(slug) {
        return ScholarshipRepository.findBySlug(slug);
    }

    async createScholarship(data) {
        return ScholarshipRepository.create(data);
    }

    async updateScholarship(id, data) {
        return ScholarshipRepository.update(id, data);
    }

    async deleteScholarship(id) {
        return ScholarshipRepository.delete(id);
    }
}

module.exports = new ScholarshipService();
