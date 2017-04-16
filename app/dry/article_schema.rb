class ArticleSchema < BaseSchema

  Schema = Dry::Validation.Form do
    required(:article).schema do
      required(:title).filled
      required(:subtitle).filled
      required(:content).filled
      required(:cover_image).filled
    end
  end

  def self.create(params)
    build_output(Schema, params)
  end
end
