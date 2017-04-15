class BookmarkSchema < BaseSchema

  Schema = Dry::Validation.Form do
    configure do
      config.messages_file = 'config/locales/errors.yml'
      predicates(Predicates::Common)
    end

    required(:user_id).filled(exist?: ::User)
    required(:article_id).filled(exist?: ::Article)
  end

  def self.create(params)
    build_output(Schema, params)
  end
end
