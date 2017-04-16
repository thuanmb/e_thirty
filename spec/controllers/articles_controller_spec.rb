describe ArticlesController do
  let(:user) { create(:user, is_admin: true) }
  before do
    warden.set_user(user)
  end

  describe 'GET /new' do
    subject { get :new }

    it 'should show new' do
      expect(subject).to render_template('new')
    end
  end

  describe 'POST /create' do
    subject { post :create, params }

    let(:params) {{
      article: {
        title: ::Faker::Lorem.sentence,
        subtitle: ::Faker::Lorem.sentence,
        content: ::Faker::Lorem.sentence,
        cover_image: 'data://something',
        published_at: 'true'
      }
    }}

    it 'should create new article' do
      expect(subject).to redirect_to("/articles/#{Article.last.id}")
    end
  end
end